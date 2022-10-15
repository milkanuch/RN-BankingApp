import { StackScreenProps } from '@react-navigation/stack';

export enum AuthStackScreenTypes {
  SignIn = 'SignIn',
  GeneralData = 'GeneralData',
  PersonalData = 'PersonalData',
}

export type AuthStackScreenParamsList = {
  [AuthStackScreenTypes.SignIn]: undefined;
  [AuthStackScreenTypes.GeneralData]: undefined;
  [AuthStackScreenTypes.PersonalData]: undefined;
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
