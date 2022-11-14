import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

import { PROFILE_SCREEN_OPTION } from './profileStackNavigation.settings';

import { ProfileStackScreenTypes } from './profileStackNavigation.types';

const Stack = createStackNavigator();

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ProfileStackScreenTypes.Profile}
        component={ProfileScreen}
        options={PROFILE_SCREEN_OPTION}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
