import { FC, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import { personalDataErrorMessage } from '../../../constants/errorMesages';
import { personalDataValidation } from '../../../helpers/validation';
import { PersonalDataScreenProps } from '../../../navigation/AuthStackNavigation/AuthStackNavigation.types';
import { useUserLoginQuery } from '../../../services';
import { useAppDispatch } from '../../../store';
import { setUserIsLogged } from '../../../store/user/userSlice';
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

const PersonalDataScreen: FC<PersonalDataScreenProps> = ({ navigation }) => {
  const [passportNumber, setPassportNumber] = useState('');
  const [paymentBill, setPaymentBill] = useState('');

  const dispatch = useAppDispatch();
  const handleNextButton = () => {
    dispatch(setUserIsLogged(true));
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const { data, error, isLoading } = useUserLoginQuery({
    phoneNumber: '+380673113221',
    password: 'aXxdgdsg3!_',
  });

  const isValid =
    personalDataValidation(passportNumber) &&
    personalDataValidation(paymentBill);

  console.log(data, error);

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
        validation={personalDataValidation}
        errorText={personalDataErrorMessage}
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
