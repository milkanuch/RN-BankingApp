import { FC, useState } from 'react';
import { ScrollView } from 'react-native';

import AppLoadingScreen from 'screens/AppLoadingScreen/AppLoadingScreen';

import { setItem } from 'store/bankStore/store';

import { useUserRegisterMutation } from 'services/index';

import AuthHeader from 'components/AuthHeader/AuthHeader';
import { showSnackBar } from 'components/Card/card.helper';
import CustomButton from 'components/CustomButton/CustomButton';
import CustomTextInput from 'components/CustomTextInput/CustomTextInput';

import {
  PASSPORT_DATA_ERROR_MESSAGE,
  PERSONAL_DATA_ERROR_MESSAGE,
} from 'constants/errorMessages';
import { passportValidation, personalDataValidation } from 'helpers/validation';
import {
  AuthStackScreenTypes,
  PersonalDataScreenProps,
} from 'navigation/AuthStackNavigation/AuthStackNavigation.types';

import Divider from '../Divider/Divider';

import {
  backButtonTitle,
  nextButtonIsWhiteTheme,
  nextButtonTitle,
  passportNumberTextInput,
  paymentBillTextInput,
  text,
  title,
} from './personalDataScreen.settings';
import styles from './personalDataScreen.styles';

const PersonalDataScreen: FC<PersonalDataScreenProps> = ({
  navigation,
  route,
}) => {
  const { firstName, lastName, phoneNumber, password } = route.params;

  const [passportNumber, setPassportNumber] = useState('');
  const [paymentBill, setPaymentBill] = useState('');

  const [signUp, { isLoading }] = useUserRegisterMutation();

  const handleNextButton = async () => {
    const res = await signUp({
      firstName,
      lastName,
      phoneNumber,
      password,
      passportNumber,
      ipn: paymentBill,
    }).unwrap();

    if (res.error) {
      showSnackBar(res.error);
    } else {
      setItem('AccessToken', res.access_token);
      setItem('RefreshToken', res.refresh_token);
      navigation.navigate(AuthStackScreenTypes.PinCode);
    }
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const isValid =
    passportValidation(passportNumber) && personalDataValidation(paymentBill);

  if (isLoading) {
    return <AppLoadingScreen />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AuthHeader title={title} text={text} style={styles.header} />
      <CustomTextInput
        title={passportNumberTextInput.title}
        placeHolder={passportNumberTextInput.hint}
        value={passportNumber}
        validation={passportValidation}
        errorText={PASSPORT_DATA_ERROR_MESSAGE}
        setValue={setPassportNumber}
      />
      <CustomTextInput
        title={paymentBillTextInput.title}
        placeHolder={paymentBillTextInput.hint}
        validation={personalDataValidation}
        errorText={PERSONAL_DATA_ERROR_MESSAGE}
        value={paymentBill}
        setValue={setPaymentBill}
      />
      <CustomButton
        isDisabled={!isValid}
        title={nextButtonTitle}
        onPress={handleNextButton}
        isWhiteTheme={nextButtonIsWhiteTheme}
      />
      <Divider />
      <CustomButton title={backButtonTitle} onPress={handleBackButton} />
    </ScrollView>
  );
};

export default PersonalDataScreen;
