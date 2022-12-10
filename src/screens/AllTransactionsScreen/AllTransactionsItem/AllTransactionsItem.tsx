import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from 'constants/colors';

import {
  IAllTransactionsItemProps,
  TransactionsCategory,
} from './allTransactionItem.types';
import styles from './allTransactionsItem.styles';
import { activeOpacityValue, IconSize } from './allTransactionItem.settings';

const AllTransactionsItem: FC<IAllTransactionsItemProps> = ({
  category = TransactionsCategory.Food,
  currency,
  provider,
  profit,
  sum,
  time,
}) => {
  const handleTransactionFullDescription = () => {};

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacityValue}
      onPress={handleTransactionFullDescription}>
      <View style={styles.categoryContainer}>
        <Icon name={category} size={IconSize} color={colors.black} />
        <Text style={styles.cardProvider}>{provider}</Text>
      </View>
      <View>
        <Text style={styles.transactionSum}>
          {(profit ? 1 : -1) * Number(sum.toFixed(0)) + ` ${currency}`}
        </Text>
        <Text style={styles.transactionDate}>
          {new Date(time).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AllTransactionsItem;
