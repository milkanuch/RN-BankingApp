import { View, Text } from 'react-native';
import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from 'constants/colors';

import { TransactionsCategory } from 'screens/AllTransactionsScreen/AllTransactionsItem/allTransactionItem.types';

import { IconSize, numberOfLines } from './transactionsCategory.settings';
import styles from './transactionCategory.styles';
import { ITransactionsCategoryProps } from './transactionCategory.types';

const TransactionCategory: FC<ITransactionsCategoryProps> = ({ category }) => {
  return (
    <View style={styles.transactionCategory}>
      <View style={styles.categoryLine} />
      <View style={styles.transactionCategoryTextContainer}>
        <Text
          style={styles.transactionCategoryText}
          adjustsFontSizeToFit
          numberOfLines={numberOfLines}>
          {category}
        </Text>
        <Icon
          name={TransactionsCategory[category]}
          size={IconSize}
          color={COLORS.white}
        />
      </View>
      <View style={styles.categoryLine} />
    </View>
  );
};

export default TransactionCategory;
