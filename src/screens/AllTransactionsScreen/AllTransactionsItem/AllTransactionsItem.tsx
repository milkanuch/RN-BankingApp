import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

import { COLORS } from 'constants/colors';

import {
  AllTransactionItemProps,
  AppStackNavigationTypes,
} from 'navigation/AppStackNavigation/appStackNavigation.types';

import {
  getTransactionDate,
  getTransactionSum,
} from '../allTransactions.helpers';

import {
  IAllTransactionsItemProps,
  TransactionsCategory,
} from './allTransactionItem.types';
import styles from './allTransactionsItem.styles';
import { activeOpacityValue, IconSize } from './allTransactionItem.settings';

const AllTransactionsItem: FC<IAllTransactionsItemProps> = ({
  id,
  category,
  currency,
  provider,
  profit,
  sum,
  time,
  purpose,
  receiverCardNumber,
  senderCardNumber,
  receiverName,
  senderName,
}) => {
  const { navigate } = useNavigation<AllTransactionItemProps>();

  const transactionDetailItemProps = {
    id,
    category,
    currency,
    profit,
    sum,
    time,
    provider,
    purpose,
    receiverCardNumber,
    senderCardNumber,
    receiverName,
    senderName,
  };

  const handleTransactionFullDescription = () => {
    navigate(
      AppStackNavigationTypes.TransactionDetailInfo,
      transactionDetailItemProps,
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacityValue}
      onPress={handleTransactionFullDescription}>
      <View style={styles.categoryContainer}>
        <Icon
          name={TransactionsCategory[category]}
          size={IconSize}
          color={COLORS.black}
        />
        <Text style={styles.cardProvider}>{provider}</Text>
      </View>
      <View>
        <Text style={styles.transactionSum}>
          {getTransactionSum(profit, sum, currency)}
        </Text>
        <Text style={styles.transactionDate}>{getTransactionDate(time)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AllTransactionsItem;
