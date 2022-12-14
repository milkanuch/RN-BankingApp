import React, { FC, useCallback, useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  AuthStackScreenTypes,
  PinCodeScreenProps,
} from 'navigation/AuthStackNavigation/AuthStackNavigation.types';

import { setIsLoading, setUserIsLogged } from 'store/user/userSlice';

import { useAppDispatch } from 'store/index';

import { useFingerPrint } from 'hooks/useFingerPrint';

import { useShakeAnimation } from 'hooks/useShakeAnimation';

import { getItem, setItem } from 'store/bankStore/store';

import { useUserRefreshMutation } from 'services/index';

import useRefreshToken from 'hooks/useRefreshToken';

import { isEqual } from './pinCodeScreen.utils';

import styles from './pinCodeScreen.styles';
import { PIN_CODE_LENGTH } from './pinCodeScreen.settings';
import { PinCodeKeyboard } from './PinCodeKeyboard/PinCodeKeyboard';
import { IPinCodeFunctions } from './PinCodeKeyboard/pinCodeKeyboard.types';
import PinCodeFooter from './PinCodeFooter/PinCodeFooter';
import PinCodeHeader from './PinCodeHeader/PinCodeHeader';
import { PinCodeContainer } from './PinCodeContainer/PinCodeContainer';

const PinCodeScreen: FC<PinCodeScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const [pinCode, setPinCode] = useState<string[]>([]);
  const [confirmationPin, setConfirmationPin] = useState<string[]>([]);
  const [isLogin, setIsLogin] = useState(true);
  const [refresh] = useUserRefreshMutation();

  const { animation, shake } = useShakeAnimation();
  const { onFingerprint } = useFingerPrint();
  const { refreshToken } = useRefreshToken();

  const fetchPinCode = useCallback(async () => {
    const tempCode = await getItem('PinCode');
    const tempToken = await getItem('RefreshToken');

    if (tempCode && tempToken) {
      setPinCode([...tempCode]);
      setIsLogin(false);
    }
  }, []);

  const tryLogin = useCallback(() => {
    if (confirmationPin.length === PIN_CODE_LENGTH) {
      if (isEqual(pinCode, confirmationPin)) {
        dispatch(setUserIsLogged(true));
        refresh({ refreshToken });
        if (isLogin) {
          setItem('PinCode', confirmationPin.join(''));
        }
      } else {
        setConfirmationPin([]);
        shake();
      }
    }
  }, [
    confirmationPin,
    pinCode,
    isLogin,
    dispatch,
    shake,
    refresh,
    refreshToken,
  ]);

  useEffect(() => {
    fetchPinCode();
    if (!isLogin) {
      onFingerprint();
    }
  }, [fetchPinCode, onFingerprint, isLogin]);

  useEffect(() => {
    tryLogin();
  }, [confirmationPin, tryLogin]);

  const addNumber = (num: string) => {
    if (pinCode.length < PIN_CODE_LENGTH) {
      setPinCode(prev => [...prev, num]);
    } else if (confirmationPin.length < PIN_CODE_LENGTH) {
      setConfirmationPin(prev => [...prev, num]);
    }
  };

  const removeNumber = () => {
    if (confirmationPin.length) {
      setConfirmationPin(prev => [...prev.slice(0, -1)]);
    } else if (pinCode.length < PIN_CODE_LENGTH) {
      setPinCode(prev => [...prev.slice(0, -1)]);
    }
  };

  const handlePhoneNumberLogin = () => {
    dispatch(setIsLoading(true));
    navigation.navigate(AuthStackScreenTypes.SignIn);
  };

  const functions: IPinCodeFunctions = {
    addNumber,
    removeNumber,
    onFingerprint,
    isTouchIdDisabled: isLogin,
  };

  return (
    <SafeAreaView style={styles.container}>
      <PinCodeHeader />
      <PinCodeContainer
        isLogin={(pinCode.length < PIN_CODE_LENGTH && isLogin) || !isLogin}
        pinCode={pinCode.length === PIN_CODE_LENGTH ? confirmationPin : pinCode}
        animation={animation}
      />
      <PinCodeKeyboard functions={functions} />
      <PinCodeFooter onPress={handlePhoneNumberLogin} />
    </SafeAreaView>
  );
};

export default PinCodeScreen;
