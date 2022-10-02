import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';

import {
  HomeStackParamsList,
  HomeStackScreenTypes,
} from './homeStackNavigation.types';

import { HOME_SCREEN_OPTIONS } from './homeStackNavigation.settings';

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeStackScreenTypes.Home}
        component={HomeScreen}
        options={HOME_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
