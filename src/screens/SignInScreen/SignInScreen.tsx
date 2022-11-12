import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native';

import CheckBox from '../../components/CheckBox/CheckBox';
import CustomButton from '../../components/CustomButton/CustomButton';

import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

import TabModeSelector from '../../components/TabModeSelector/TabModeSelector';

import AuthHeader from '../../components/AuthHeader/AuthHeader';

import {
  AuthStackScreenTypes,
  SignInScreenProps,
} from '../../navigation/AuthStackNavigation/AuthStackNavigation.types';

import { passwordValidation } from '../../helpers/validation';

import { passwordErrorMessage } from '../../constants/errorMesages';

import { useUserLoginMutation } from '../../services';

import { showSnackBar } from '../../components/Card/card.helper';

import AuthCreateAccount from './AuthCreateAccount/AuthCreateAccount';

import AuthDivider from './AuthDivider/AuthDivider';

import {
  signInModeItems,
  headerTitle,
  headerText,
  authTitles,
  authHint,
  passwordTextInputTitle,
  checkBoxText,
  signInButtonTitle,
  touchIdButtonTitle,
  touchIdButtonIconName,
  touchIdButtonIsWhiteTheme,
  authValidation,
  authErrorMessages,
  loginKey,
} from './signInScreen.settings';

import styles from './signInScreen.styles';
import { SignInMode } from './signInScreen.types';

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const [signInMode, setSignInMode] = useState(SignInMode.WithPhoneNumber);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [savePassword, setSavePassword] = useState(false);
  const [signIn, { data, reset }] = useUserLoginMutation();

  const handleCheckBoxState = (newValue: boolean) => setSavePassword(newValue);

  const handleSignIn = async () => {
    await signIn({
      [loginKey[signInMode]]: login,
      password: password,
    });
  };

  const handleTouchId = () => {};

  const handleCreateAccount = () => {
    navigation.navigate(AuthStackScreenTypes.GeneralData);
  };

  const isValid =
    authValidation[signInMode](login) && passwordValidation(password);
  if (data && data.error) {
    showSnackBar(data.error);
    reset();
  }

  return (
    <ScrollView style={styles.screen}>
      <AuthHeader title={headerTitle} text={headerText} style={styles.header} />
      <TabModeSelector
        currentValue={signInMode}
        setNewValue={setSignInMode}
        items={signInModeItems}
      />
      <CustomTextInput
        title={authTitles[signInMode]}
        placeHolder={authHint[signInMode]}
        validation={authValidation[signInMode]}
        errorText={authErrorMessages[signInMode]}
        value={login}
        setValue={setLogin}
        style={styles.error}
      />
      <CustomTextInput
        title={passwordTextInputTitle}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
        errorText={passwordErrorMessage}
        validation={passwordValidation}
      />
      <CheckBox
        isChecked={savePassword}
        text={checkBoxText}
        onPress={handleCheckBoxState}
        containerStyle={styles.checkBox}
      />
      <CustomButton
        isDisabled={!isValid}
        title={signInButtonTitle}
        onPress={handleSignIn}
      />
      <AuthDivider />
      <CustomButton
        title={touchIdButtonTitle}
        iconName={touchIdButtonIconName}
        onPress={handleTouchId}
        isWhiteTheme={touchIdButtonIsWhiteTheme}
      />
      <AuthCreateAccount onPress={handleCreateAccount} />
    </ScrollView>
  );
};

export default SignInScreen;
