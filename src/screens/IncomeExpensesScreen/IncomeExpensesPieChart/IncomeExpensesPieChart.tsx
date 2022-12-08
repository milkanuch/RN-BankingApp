import { View } from 'react-native';
import React, { FC } from 'react';
import { PieChart } from 'react-native-gifted-charts';

import IconButton from '../../../components/IconButton/IconButton';

import { colors } from '../../../constants/colors';

import CenterLabelProps from './CenterLabelComponent/CenterLabelComponent';
import {
  innerRadius,
  leftButtonIconName,
  leftButtonIconSize,
  rightButtonIconName,
  rightButtonIconSize,
} from './incomeExpensesPieChart.settings';
import styles from './incomeExpensesPieChart.styles';
import { IIncomeExpensesPieChartProps } from './incomeExpensesPieChart.types';

const IncomeExpensesPieChart: FC<IIncomeExpensesPieChartProps> = ({
  sum,
  month,
  year,
  currency,
  categories,
  leftButtonOnpress,
  rightButtonOnPress,
}) => {
  const pieData = [
    {
      value: (categories[0].totalSpendPerMonth / categories[0].totalSum) * 100,
      color: colors.darkGrey,
    },
    {
      value: (categories[1].totalSpendPerMonth / categories[1].totalSum) * 100,
      color: colors.black,
    },
    {
      value: (categories[2].totalSpendPerMonth / categories[2].totalSum) * 100,
      color: colors.lightGrey,
    },
    {
      value: (categories[3].totalSpendPerMonth / categories[3].totalSum) * 100,
      color: colors.grey,
    },
  ];

  const renderCenterLabelComponent = () => (
    <CenterLabelProps sum={sum} month={month} year={year} currency={currency} />
  );

  return (
    <View style={styles.pieChartContainer}>
      <View style={styles.buttonsContainer}>
        <IconButton
          iconName={leftButtonIconName}
          size={leftButtonIconSize}
          color={colors.black}
          onPress={leftButtonOnpress}
        />
      </View>
      <View style={styles.pieContainer}>
        <PieChart
          innerRadius={innerRadius}
          data={pieData}
          centerLabelComponent={renderCenterLabelComponent}
          focusOnPress
          donut
        />
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton
          iconName={rightButtonIconName}
          size={rightButtonIconSize}
          color={colors.black}
          onPress={rightButtonOnPress}
        />
      </View>
    </View>
  );
};

export default IncomeExpensesPieChart;
