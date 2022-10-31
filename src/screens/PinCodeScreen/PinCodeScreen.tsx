import React, { useCallback, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { PinCodeContainer } from './PinCodeContainer/PinCodeContainer';
import PinCodeFooter from './PinCodeFooter/PinCodeFooter';
import PinCodeHeader from './PinCodeHeader/PinCodeHeader';
import { PinCodeKeyboard } from './PinCodeKeyboard/PinCodeKeyboard';
import { IPinCodeFunctions } from './PinCodeKeyboard/pinCodeKeyboard.types';

import styles from './pinCodeScreen.styles';

const PinCodeScreen = () => {
  const anim = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    // makes the sequence loop
    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(anim.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: false,
        }),
        // shift element to the right by 2 units
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: false,
        }),
        // bring the element back to its original position
        Animated.timing(anim.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: false,
        }),
      ]),
      // loops the above animation config 4 times
      { iterations: 4 },
    ).start();
  }, []);

  const [pinCode, setPinCode] = useState(['', '', '', '']);

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
    console.log(tempCode);
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
    console.log(tempCode);
    setPinCode([...tempCode]);
  };
  const onFingerprint = () => {
    console.log('fingerprint');
  };
  const isEqaul = (previous: string[], temp: string[]) => {
    for (let i = 0; i < previous.length; i++) {
      if (temp[i] !== previous[i]) {
        return false;
      }
    }
    return true;
  };
  const tryLogin = () => {
    const previous = ['1', '1', '1', '1'];
    if (!isEqaul(previous, pinCode)) {
      shake();
      for (let i = 0; i < pinCode.length; i++) {
        pinCode[i] = '';
      }
    } else {
      // routing...
    }
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
      <PinCodeFooter />
    </SafeAreaView>
  );
};

export default PinCodeScreen;
