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

import AuthCreateAccount from './AuthCreateAccount/AuthCreateAccount';

import AuthDivider from './AuthDivider/AuthDivider';

import {
  signInModeItems,
  headerTitle,
  headerText,
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

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const [signInMode, setSignInMode] = useState(SignInMode.WithPhoneNumber);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [savePassword, setSavePassword] = useState(false);

  const handleCheckBoxState = (newValue: boolean) => setSavePassword(newValue);
  const handleSignInOnPress = () => {};
  const handleCreateAccount = () => {
    navigation.navigate(AuthStackScreenTypes.GeneralData);
  };

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
        value={login}
        setValue={setLogin}
      />
      <CustomTextInput
        title={passwordTextInputTitle}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
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
