import { createStackNavigator } from '@react-navigation/stack';

import IncomeExpenseScreen from '../../screens/IncomeExpenseScreen/IncomeExpenseScreen';
import { HomeStackScreenTypes } from '../HomeStackNavigation/homeStackNavigation.types';

import { INCOME_EXPENSE_SCREEN_OPTION } from './incomeExpenseStackNavigation.settings';

const Stack = createStackNavigator();

const IncomeExpenseStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeStackScreenTypes.IncomуExpense}
        component={IncomeExpenseScreen}
        options={INCOME_EXPENSE_SCREEN_OPTION}
      />
    </Stack.Navigator>
  );
};
export default IncomeExpenseStackNavigation;
