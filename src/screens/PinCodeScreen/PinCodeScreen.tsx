import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { isEnrolledAsync, authenticateAsync } from 'expo-local-authentication';

import {
  AuthStackScreenTypes,
  PinCodeScreenProps,
} from '../../navigation/AuthStackNavigation/AuthStackNavigation.types';

import { setUserIsLogged } from '../../store/user/userSlice';

import { useAppDispatch } from '../../store';

import { PinCodeContainer } from './PinCodeContainer/PinCodeContainer';
import PinCodeFooter from './PinCodeFooter/PinCodeFooter';
import PinCodeHeader from './PinCodeHeader/PinCodeHeader';
import { PinCodeKeyboard } from './PinCodeKeyboard/PinCodeKeyboard';
import { IPinCodeFunctions } from './PinCodeKeyboard/pinCodeKeyboard.types';

import styles from './pinCodeScreen.styles';
import { PIN_CODE_OPTIONS } from './pinCodeScreen.settings';

const PinCodeScreen: FC<PinCodeScreenProps> = ({ navigation }) => {
  const [pinCode, setPinCode] = useState(['', '', '', '']);

  const dispatch = useAppDispatch();

  const onFingerprint = useCallback(async () => {
    const isEnrolled = await isEnrolledAsync();

    if (isEnrolled) {
      const isSuccess = await authenticateAsync(PIN_CODE_OPTIONS);
      if (isSuccess.success) {
        dispatch(setUserIsLogged(true));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    onFingerprint();
  }, [onFingerprint]);

  const anim = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: false,
        }),
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: false,
        }),
        Animated.timing(anim.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: false,
        }),
      ]),
      { iterations: 4 },
    ).start();
  }, []);

  const addNumber = (num: string) => {
    let tempCode = pinCode;
    for (let i = 0; i < tempCode.length; i++) {
      if (tempCode[i] === '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    if (pinCode[pinCode.length - 1] !== '') {
      tryLogin();
    }
    setPinCode([...tempCode]);
  };

  const removeNumber = () => {
    let tempCode = pinCode;
    for (let i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    setPinCode([...tempCode]);
  };

  const isEqual = (previous: string[], temp: string[]) => {
    for (let i = 0; i < previous.length; i++) {
      if (temp[i] !== previous[i]) {
        return false;
      }
    }
    return true;
  };

  const tryLogin = () => {
    const previous = ['1', '1', '1', '1'];
    if (!isEqual(previous, pinCode)) {
      shake();
      for (let i = 0; i < pinCode.length; i++) {
        pinCode[i] = '';
      }
    } else {
      dispatch(setUserIsLogged(true));
    }
  };

  const handlePhoneNumberLogin = () => {
    navigation.navigate(AuthStackScreenTypes.SignIn);
  };

  const functions: IPinCodeFunctions = {
    addNumber,
    removeNumber,
    onFingerprint,
  };

  return (
    <SafeAreaView style={styles.container}>
      <PinCodeHeader />
      <PinCodeContainer pinCode={pinCode} animation={anim} />
      <PinCodeKeyboard functions={functions} />
      <PinCodeFooter onPress={handlePhoneNumberLogin} />
    </SafeAreaView>
  );
};

export default PinCodeScreen;
