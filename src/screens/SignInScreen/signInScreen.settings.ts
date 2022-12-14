import { ITabModeSelectorItemData } from 'components/TabModeSelector/TabModeSelectorItem/tabModeSelectorItem.types';
import {
  PERSONAL_DATA_ERROR_MESSAGE,
  PHONE_NUMBER_ERROR_MESSAGE,
} from 'constants/errorMessages';

import {
  phoneNumberValidation,
  personalDataValidation,
} from 'helpers/validation';

import { SignInMode } from './signInScreen.types';

export const signInModeItems: ITabModeSelectorItemData[] = [
  {
    title: 'Phone',
    value: SignInMode.WithPhoneNumber,
  },
  {
    title: 'Payment Bill',
    value: SignInMode.WithPaymentBill,
  },
];

export const headerTitle = 'Sign In';

export const headerText = 'Please enter the required login information.';

export const authTitles = {
  [SignInMode.WithPhoneNumber]: 'Phone number',
  [SignInMode.WithPaymentBill]: 'Payment Bill Number',
};

export const authHint = {
  [SignInMode.WithPhoneNumber]: '+380 96 000 0000',
  [SignInMode.WithPaymentBill]: '1234567891',
};

export const loginKey = {
  [SignInMode.WithPaymentBill]: 'ipn',
  [SignInMode.WithPhoneNumber]: 'phoneNumber',
};

export const authValidation = {
  [SignInMode.WithPhoneNumber]: phoneNumberValidation,
  [SignInMode.WithPaymentBill]: personalDataValidation,
};

export const authErrorMessages = {
  [SignInMode.WithPhoneNumber]: PHONE_NUMBER_ERROR_MESSAGE,
  [SignInMode.WithPaymentBill]: PERSONAL_DATA_ERROR_MESSAGE,
};

export const passwordTextInputTitle = 'Password';

export const checkBoxText = 'Save password';

export const signInButtonTitle = 'Sign In';

export const createAccountButtonTitle = 'Create account';

export const createAccountButtonIsWhiteTheme = true;
