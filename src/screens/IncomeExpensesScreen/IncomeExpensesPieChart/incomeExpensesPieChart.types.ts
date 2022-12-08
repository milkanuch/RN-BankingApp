import { IIncomeExpensesResponseParams } from './../../../services/bankApi.types';

export interface IIncomeExpensesPieChartProps
  extends IIncomeExpensesResponseParams {
  leftButtonOnpress: () => void;
  rightButtonOnPress: () => void;
}
