import { StackScreenProps } from '@react-navigation/stack';

import { IPersonalDataScreenParams } from 'screens/SignUpScreen/PersonalDataScreen/personalDataScreen.types';

export enum AuthStackScreenTypes {
  SignIn = 'SignIn',
  GeneralData = 'GeneralData',
  PersonalData = 'PersonalData',
  PinCode = 'PinCode',
}

export type AuthStackScreenParamsList = {
  [AuthStackScreenTypes.SignIn]: undefined;
  [AuthStackScreenTypes.GeneralData]: undefined;
  [AuthStackScreenTypes.PersonalData]: IPersonalDataScreenParams;
  [AuthStackScreenTypes.PinCode]: undefined;
};

export type SignInScreenProps = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.SignIn
>;

export type GeneralDataScreenProps = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.GeneralData
>;

export type PersonalDataScreenProps = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.PersonalData
>;

export type PinCodeScreenProps = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.PinCode
>;
