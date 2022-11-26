import { createStackNavigator } from '@react-navigation/stack';

import CardSettingsScreen from '../../screens/CardSettingsScreen/CardSettingsScreen';
import NewCardScreen from '../../screens/NewCardScreen/NewCardScreen';

import { CARD_SETTINGS_SCREEN_OPTION } from './cardSettingsStackNavigation.settings';

import { CardSettingsStackScreenTypes } from './cardSettingsStackNavigation.types';

const Stack = createStackNavigator();

const CardSettingsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CardSettingsStackScreenTypes.CardSettings}
        component={CardSettingsScreen}
        options={CARD_SETTINGS_SCREEN_OPTION}
      />
      <Stack.Screen
        name={CardSettingsStackScreenTypes.NewCard}
        component={NewCardScreen}
        options={CARD_SETTINGS_SCREEN_OPTION}
      />
    </Stack.Navigator>
  );
};

export default CardSettingsStackNavigation;
