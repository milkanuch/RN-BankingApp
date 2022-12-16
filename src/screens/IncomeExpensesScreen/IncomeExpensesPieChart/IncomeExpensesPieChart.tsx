import { View } from 'react-native';
import React, { FC } from 'react';
import { PieChart } from 'react-native-gifted-charts';

import { colors } from 'constants/colors';

import IconButton from 'components/IconButton/IconButton';

import { getPercentage } from './incomeExpensesPieChart.helpers';

import CenterLabelProps from './CenterLabelComponent/CenterLabelComponent';
import {
  innerRadius,
  leftButtonIconName,
  leftButtonIconSize,
  pieDataColors,
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
  const pieData = categories.map((category, index) => {
    return {
      value: getPercentage(category.totalSum, category.totalSpendPerMonth),
      color: pieDataColors[index],
    };
  });

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
