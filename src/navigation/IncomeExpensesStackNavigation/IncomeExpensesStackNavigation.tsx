import { createStackNavigator } from '@react-navigation/stack';

import IncomeExpensesScreen from 'screens/IncomeExpensesScreen/IncomeExpenseScreen';

import { INCOME_EXPENSES_SCREEN_OPTION } from './incomeExpensesStackNavigation.settings';
import { IncomeExpenseStackScreenTypes } from './incomeExpensesStackNavigation.types';

const Stack = createStackNavigator();

const IncomeExpensesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={IncomeExpenseStackScreenTypes.IncomeExpenses}
        component={IncomeExpensesScreen}
        options={INCOME_EXPENSES_SCREEN_OPTION}
      />
    </Stack.Navigator>
  );
};
export default IncomeExpensesStackNavigation;
