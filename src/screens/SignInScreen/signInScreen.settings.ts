import { ITabModeSelectorItemData } from '../../components/TabModeSelector/TabModeSelectorItem/tabModeSelectorItem.types';
import {
  personalDataErrorMessage,
  phoneNumberErrorMessage,
} from '../../constants/errorMesages';

import {
  phoneNumberValidation,
  personalDataValidation,
} from './../../helpers/validation';

import { SignInMode } from './signInScreen.types';

const signInModeItems: ITabModeSelectorItemData[] = [
  {
    title: 'Phone',
    value: SignInMode.WithPhoneNumber,
  },
  {
    title: 'Payment Bill',
    value: SignInMode.WithPaymentBill,
  },
];

const headerTitle = 'Sign In';

const headerText = 'Please enter the required login information.';

const authTitles = {
  [SignInMode.WithPhoneNumber]: 'Phone number',
  [SignInMode.WithPaymentBill]: 'Payment Bill Number',
};

const authHint = {
  [SignInMode.WithPhoneNumber]: '+380 96 000 0000',
  [SignInMode.WithPaymentBill]: '1234567891',
};

const loginKey = {
  [SignInMode.WithPaymentBill]: 'ipn',
  [SignInMode.WithPhoneNumber]: 'phoneNumber',
};

const authValidation = {
  [SignInMode.WithPhoneNumber]: phoneNumberValidation,
  [SignInMode.WithPaymentBill]: personalDataValidation,
};

const authErrorMessages = {
  [SignInMode.WithPhoneNumber]: phoneNumberErrorMessage,
  [SignInMode.WithPaymentBill]: personalDataErrorMessage,
};

const passwordTextInputTitle = 'Password';

const checkBoxText = 'Save password';

const signInButtonTitle = 'Sign In';

const touchIdButtonTitle = 'Touch ID';

const touchIdButtonIconName = 'fingerprint';

const touchIdButtonIsWhiteTheme = true;

export {
  signInModeItems,
  headerTitle,
  headerText,
  authTitles,
  authHint,
  authValidation,
  authErrorMessages,
  passwordTextInputTitle,
  checkBoxText,
  signInButtonTitle,
  touchIdButtonIconName,
  touchIdButtonIsWhiteTheme,
  touchIdButtonTitle,
  loginKey,
};
