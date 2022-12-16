import { View, Text } from 'react-native';
import React, { FC } from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';

import { CURRENCIES } from 'constants/card';

import { IIncomeExpensesCardProps } from './incomeExpensesCard.types';
import styles from './incomeExpensesCard.styles';
import { numberOfLines } from './incomeExpensesCard.settings';

const IncomeExpensesCard: FC<IIncomeExpensesCardProps> = ({
  category,
  currency,
  totalSpendPerMonth,
  totalSum,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.categoryTitle}
        adjustsFontSizeToFit
        numberOfLines={numberOfLines}>
        {category}
      </Text>
      <Text style={styles.totalSpendTitle}>
        {totalSpendPerMonth + CURRENCIES[currency]}
      </Text>
      <ProgressBar progressLimit={totalSum} progressLine={totalSpendPerMonth} />
    </View>
  );
};

export default IncomeExpensesCard;
