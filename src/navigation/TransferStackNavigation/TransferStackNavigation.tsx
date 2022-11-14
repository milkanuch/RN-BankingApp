import { createStackNavigator } from '@react-navigation/stack';

import MoneyTransferScreen from '../../screens/MoneyTransferScreen/MoneyTransferScreen';

import { TRANSFER_SCREEN_OPTION } from './transferStackNavigation.settings';

import {
  TransferStackParamsList,
  TransferStackScreenTypes,
} from './transferStackNavigation.types';

const Stack = createStackNavigator<TransferStackParamsList>();

const TransferStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={TransferStackScreenTypes.Transfer}
        component={MoneyTransferScreen}
        options={TRANSFER_SCREEN_OPTION}
      />
    </Stack.Navigator>
  );
};
export default TransferStackNavigation;
