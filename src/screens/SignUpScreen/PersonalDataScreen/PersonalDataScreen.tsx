import { FC, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import { showSnackBar } from '../../../components/Card/card.helper';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';

import { setUserIsLogged } from '../../../store/user/userSlice';

import {
  passportDataErrorMessage,
  personalDataErrorMessage,
} from '../../../constants/errorMesages';
import {
  passportValidation,
  personalDataValidation,
} from '../../../helpers/validation';
import { PersonalDataScreenProps } from '../../../navigation/AuthStackNavigation/AuthStackNavigation.types';
import { useUserRegisterMutation } from '../../../services';
import { useAppDispatch } from '../../../store';
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

  const dispatch = useAppDispatch();

  const handleNextButton = async () => {
    const res = await signUp({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
      passportNumber: passportNumber,
      ipn: paymentBill,
    }).unwrap();

    if (res.error) {
      showSnackBar(res.error);
    } else {
      dispatch(setUserIsLogged(true));
    }
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const isValid =
    passportValidation(passportNumber) && personalDataValidation(paymentBill);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AuthHeader title={title} text={text} style={styles.header} />
      <CustomTextInput
        title={passportNumberTextInput.title}
        placeHolder={passportNumberTextInput.hint}
        value={passportNumber}
        validation={passportValidation}
        errorText={passportDataErrorMessage}
        setValue={setPassportNumber}
      />
      <CustomTextInput
        title={paymentBillTextInput.title}
        placeHolder={paymentBillTextInput.hint}
        validation={personalDataValidation}
        errorText={personalDataErrorMessage}
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
