import { StackScreenProps } from '@react-navigation/stack';

import { IPersonalDataScreenParams } from '../../screens/SignUpScreen/PersonalDataScreen/personalDataScreen.types';

export enum AuthStackScreenTypes {
  SignIn = 'SignIn',
  GeneralData = 'GeneralData',
  PersonalData = 'PersonalData',
}

export type AuthStackScreenParamsList = {
  [AuthStackScreenTypes.SignIn]: undefined;
  [AuthStackScreenTypes.GeneralData]: undefined;
  [AuthStackScreenTypes.PersonalData]: IPersonalDataScreenParams;
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
