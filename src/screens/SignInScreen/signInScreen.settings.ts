import { ITabModeSelectorItemData } from '../../components/TabModeSelector/TabModeSelectorItem/tabModeSelectorItem.types';

import { SignInMode } from './signInScreen.types';

const signInModeItems: ITabModeSelectorItemData[] = [
  {
    title: 'Phone',
    value: SignInMode.WithPhoneNumber,
  },
  {
    title: 'Passport',
    value: SignInMode.WithPassportNumber,
  },
];

const authTitles = {
  [SignInMode.WithPhoneNumber]: 'Phone number',
  [SignInMode.WithPassportNumber]: 'Passport number',
};

const passwordTextInputTitle = 'Password';

const checkBoxText = 'Save password';

const signInButtonTitle = 'Sign In';

const touchIdButtonTitle = 'Touch ID';

const touchIdButtonIconName = 'fingerprint';

const touchIdButtonIsWhiteTheme = true;

export {
  signInModeItems,
  authTitles,
  passwordTextInputTitle,
  checkBoxText,
  signInButtonTitle,
  touchIdButtonIconName,
  touchIdButtonIsWhiteTheme,
  touchIdButtonTitle,
};
