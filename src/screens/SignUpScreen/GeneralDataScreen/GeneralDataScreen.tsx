import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import CustomButton from '../../../components/CustomButton/CustomButton';

import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';

import Divider from '../Divider/Divider';

import AuthHeader from '../../../components/AuthHeader/AuthHeader';

import {
  AuthStackScreenTypes,
  GeneralDataScreenProps,
} from '../../../navigation/AuthStackNavigation/AuthStackNavigation.types';

import {
  backButtonTitle,
  confirmPasswordTextInputTitle,
  firstNameTextInputTitle,
  lastNameTextInputTitle,
  nextButtonIsWhiteTheme,
  nextButtonTitle,
  passwordTextInputTitle,
  phoneNumberTextInputTitlte,
  text,
  title,
} from './generalDataScreen.settings';

import styles from './generalDataScreen.styles';

const GeneralDataScreen: FC<GeneralDataScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pasword, setPassword] = useState('');
  const [confrimPassword, setConfirmPassword] = useState('');

  const handleNextButton = () => {
    navigation.navigate(AuthStackScreenTypes.PersonalData);
  };
  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.screen}>
      <AuthHeader title={title} text={text} style={styles.header} />
      <CustomTextInput
        title={firstNameTextInputTitle}
        value={firstName}
        setValue={setFirstName}
      />
      <CustomTextInput
        title={lastNameTextInputTitle}
        value={lastName}
        setValue={setLastName}
      />
      <CustomTextInput
        title={phoneNumberTextInputTitlte}
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      <CustomTextInput
        title={passwordTextInputTitle}
        value={pasword}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomTextInput
        title={confirmPasswordTextInputTitle}
        value={confrimPassword}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />
      <CustomButton
        title={nextButtonTitle}
        onPress={handleNextButton}
        isWhiteTheme={nextButtonIsWhiteTheme}
      />
      <Divider />
      <CustomButton title={backButtonTitle} onPress={handleBackButton} />
    </ScrollView>
  );
};

export default GeneralDataScreen;
