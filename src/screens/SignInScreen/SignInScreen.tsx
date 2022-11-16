import React, { FC, useCallback, useEffect, useState } from 'react';
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

import { useAppDispatch } from '../../store';

import { setUserIsLogged } from '../../store/user/userSlice';

import { getItem, setItem } from '../../store/bankStore/store';

import AppLoadingScreen from '../AppLoadingScreen/AppLoadingScreen';

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
  createAccountButtonTitle,
  createAccountButtonIsWhiteTheme,
  authValidation,
  authErrorMessages,
  loginKey,
} from './signInScreen.settings';

import styles from './signInScreen.styles';
import { SignInMode } from './signInScreen.types';
import { isExpiredDate } from './signInScreen.utils';

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const [signInMode, setSignInMode] = useState(SignInMode.WithPhoneNumber);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [savePassword, setSavePassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [signIn, { isLoading }] = useUserLoginMutation();

  const fetchPinCode = useCallback(async () => {
    const refreshExperiDate = await getItem('RefreshExpireDate');

    if (refreshExperiDate && isExpiredDate(refreshExperiDate)) {
      navigation.navigate(AuthStackScreenTypes.PinCode);
    }
    setIsLoaded(true);
  }, [navigation]);

  useEffect(() => {
    fetchPinCode();
  }, [fetchPinCode]);

  const dispatch = useAppDispatch();

  const handleSignIn = async () => {
    const res = await signIn({
      [loginKey[signInMode]]: login,
      password,
    });

    if ('data' in res) {
      if (res.data.error) {
        showSnackBar(res.data.error);
      } else {
        setItem('AccessToken', res.data.access_token);
        setItem('RefreshToken', res.data.refresh_token);
        dispatch(setUserIsLogged(true));
      }
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate(AuthStackScreenTypes.GeneralData);
  };

  const handleCheckBoxState = (newValue: boolean) => setSavePassword(newValue);

  if (isLoading || !isLoaded) {
    return <AppLoadingScreen />;
  }

  const isValid =
    authValidation[signInMode](login) && passwordValidation(password);

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
        title={createAccountButtonTitle}
        onPress={handleCreateAccount}
        isWhiteTheme={createAccountButtonIsWhiteTheme}
      />
    </ScrollView>
  );
};

export default SignInScreen;
