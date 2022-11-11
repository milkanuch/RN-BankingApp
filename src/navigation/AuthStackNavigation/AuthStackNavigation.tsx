import { createStackNavigator } from '@react-navigation/stack';

import PinCodeScreen from '../../screens/PinCodeScreen/PinCodeScreen';

import SignInScreen from '../../screens/SignInScreen/SignInScreen';

import GeneralDataScreen from '../../screens/SignUpScreen/GeneralDataScreen/GeneralDataScreen';

import PersonalDataScreen from '../../screens/SignUpScreen/PersonalDataScreen/PersonalDataScreen';

import {
  GENERAL_DATA_SCREEN_OPTIONS,
  PERSONAL_DATA_SCREEN_OPTIONS,
  PINCODE_SCREEN_OPTIONS,
  SIGNIN_SCREEN_OPTIONS,
} from './AuthStackNavigation.settings';
import {
  AuthStackScreenParamsList,
  AuthStackScreenTypes,
} from './AuthStackNavigation.types';

const Stack = createStackNavigator<AuthStackScreenParamsList>();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AuthStackScreenTypes.PinCode}
        component={PinCodeScreen}
        options={PINCODE_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name={AuthStackScreenTypes.SignIn}
        component={SignInScreen}
        options={SIGNIN_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name={AuthStackScreenTypes.GeneralData}
        component={GeneralDataScreen}
        options={GENERAL_DATA_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name={AuthStackScreenTypes.PersonalData}
        component={PersonalDataScreen}
        options={PERSONAL_DATA_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
