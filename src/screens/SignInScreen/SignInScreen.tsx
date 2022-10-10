import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import CheckBox from '../../components/CheckBox/CheckBox';
import CustomButton from '../../components/CustomButton/CustomButton';

import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

import TabModeSelector from '../../components/TabModeSelector/TabModeSelector';

import AuthCreateAccount from './AuthCreateAccount/AuthCreateAccount';

import AuthDivider from './AuthDivider/AuthDivider';

import AuthHeader from './AuthHeader/AuthHeader';
import {
  signInModeItems,
  authTitles,
  passwordTextInputTitle,
  checkBoxText,
  signInButtonTitle,
  touchIdButtonTitle,
  touchIdButtonIconName,
  touchIdButtonIsWhiteTheme,
} from './signInScreen.settings';

import styles from './signInScreen.styles';
import { SignInMode } from './signInScreen.types';

const SignInScreen = () => {
  const [signInMode, setSignInMode] = useState(SignInMode.WithPhoneNumber);
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [savePassword, setSavePassword] = useState(false);

  const handleCheckBoxState = (newValue: boolean) => setSavePassword(newValue);
  const handleSignInOnPress = () => {};
  const handleCreateAccount = () => {};

  return (
    <ScrollView style={styles.screen}>
      <AuthHeader />
      <TabModeSelector
        currentValue={signInMode}
        setNewValue={setSignInMode}
        items={signInModeItems}
      />
      <CustomTextInput
        title={authTitles[signInMode]}
        value={loginInput}
        setValue={setLoginInput}
      />
      <CustomTextInput
        title={passwordTextInputTitle}
        secureTextEntry={true}
        value={passwordInput}
        setValue={setPasswordInput}
      />
      <CheckBox
        isChecked={savePassword}
        text={checkBoxText}
        onPress={handleCheckBoxState}
        containerStyle={styles.checkBox}
      />
      <CustomButton title={signInButtonTitle} onPress={handleSignInOnPress} />
      <AuthDivider />
      <CustomButton
        title={touchIdButtonTitle}
        iconName={touchIdButtonIconName}
        onPress={handleSignInOnPress}
        isWhiteTheme={touchIdButtonIsWhiteTheme}
      />
      <AuthCreateAccount onPress={handleCreateAccount} />
    </ScrollView>
  );
};

export default SignInScreen;
