import React, { FC, useState } from 'react';

import { SafeAreaView, ScrollView } from 'react-native';

import CustomButton from '../../../components/CustomButton/CustomButton';

import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';

import Divider from '../Divider/Divider';

import AuthHeader from '../../../components/AuthHeader/AuthHeader';

import {
  AuthStackScreenTypes,
  GeneralDataScreenProps,
} from '../../../navigation/AuthStackNavigation/AuthStackNavigation.types';

import {
  credentialsValidation,
  passwordValidation,
  phoneNumberValidation,
} from '../../../helpers/validation';

import {
  credentialsErrorMessage,
  passwordErrorMessage,
  phoneNumberErrorMessage,
} from '../../../constants/errorMesages';

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
          errorText={credentialsErrorMessage}
        />
        <CustomTextInput
          title={lastNameTextInput.title}
          placeHolder={lastNameTextInput.hint}
          value={lastName}
          setValue={setLastName}
          validation={credentialsValidation}
          errorText={credentialsErrorMessage}
        />
        <CustomTextInput
          title={phoneNumberTextInput.title}
          placeHolder={phoneNumberTextInput.hint}
          value={phoneNumber}
          errorText={phoneNumberErrorMessage}
          validation={phoneNumberValidation}
          setValue={setPhoneNumber}
        />
        <CustomTextInput
          title={passwordTextInputTitle}
          value={password}
          setValue={setPassword}
          errorText={passwordErrorMessage}
          validation={passwordValidation}
          secureTextEntry={true}
        />
        <CustomTextInput
          title={confirmPasswordTextInputTitle}
          value={confirmPassword}
          setValue={setConfirmPassword}
          validation={passwordValidation}
          errorText={passwordErrorMessage}
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
