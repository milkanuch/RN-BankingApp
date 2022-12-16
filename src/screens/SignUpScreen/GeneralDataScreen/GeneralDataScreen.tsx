import React, { FC, useState } from 'react';

import { SafeAreaView, ScrollView } from 'react-native';

import CustomButton from 'components/CustomButton/CustomButton';

import CustomTextInput from 'components/CustomTextInput/CustomTextInput';

import AuthHeader from 'components/AuthHeader/AuthHeader';

import {
  AuthStackScreenTypes,
  GeneralDataScreenProps,
} from 'navigation/AuthStackNavigation/AuthStackNavigation.types';

import {
  credentialsValidation,
  passwordValidation,
  phoneNumberValidation,
} from 'helpers/validation';

import {
  CREDENTIALS_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  PHONE_NUMBER_ERROR_MESSAGE,
} from 'constants/errorMessages';

import Divider from '../Divider/Divider';

import {
  backButtonTitle,
  confirmPasswordTextInputTitle,
  firstNameTextInput,
  lastNameTextInput,
  nextButtonIsWhiteTheme,
  nextButtonTitle,
  passwordTextInputTitle,
  phoneNumberTextInput,
  text,
  title,
} from './generalDataScreen.settings';

import styles from './generalDataScreen.styles';

const GeneralDataScreen: FC<GeneralDataScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNextButton = () => {
    navigation.navigate(AuthStackScreenTypes.PersonalData, {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
    });
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const isValid =
    credentialsValidation(firstName) &&
    credentialsValidation(lastName) &&
    phoneNumberValidation(phoneNumber) &&
    passwordValidation(password) &&
    password === confirmPassword;

  return (
    <ScrollView style={styles.screen}>
      <SafeAreaView>
        <AuthHeader title={title} text={text} style={styles.header} />
        <CustomTextInput
          title={firstNameTextInput.title}
          placeHolder={firstNameTextInput.hint}
          value={firstName}
          setValue={setFirstName}
          validation={credentialsValidation}
          errorText={CREDENTIALS_ERROR_MESSAGE}
        />
        <CustomTextInput
          title={lastNameTextInput.title}
          placeHolder={lastNameTextInput.hint}
          value={lastName}
          setValue={setLastName}
          validation={credentialsValidation}
          errorText={CREDENTIALS_ERROR_MESSAGE}
        />
        <CustomTextInput
          title={phoneNumberTextInput.title}
          placeHolder={phoneNumberTextInput.hint}
          value={phoneNumber}
          errorText={PHONE_NUMBER_ERROR_MESSAGE}
          validation={phoneNumberValidation}
          setValue={setPhoneNumber}
        />
        <CustomTextInput
          title={passwordTextInputTitle}
          value={password}
          setValue={setPassword}
          errorText={PASSWORD_ERROR_MESSAGE}
          validation={passwordValidation}
          secureTextEntry={true}
        />
        <CustomTextInput
          title={confirmPasswordTextInputTitle}
          value={confirmPassword}
          setValue={setConfirmPassword}
          validation={passwordValidation}
          errorText={PASSWORD_ERROR_MESSAGE}
          secureTextEntry={true}
        />
        <CustomButton
          isDisabled={!isValid}
          title={nextButtonTitle}
          onPress={handleNextButton}
          isWhiteTheme={nextButtonIsWhiteTheme}
        />
        <Divider />
        <CustomButton title={backButtonTitle} onPress={handleBackButton} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default GeneralDataScreen;
