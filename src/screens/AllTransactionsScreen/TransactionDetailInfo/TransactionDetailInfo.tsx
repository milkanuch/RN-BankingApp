import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';

import { TransactionDetailScreenProps } from 'navigation/AppStackNavigation/appStackNavigation.types';

import { getFormatedDate, getTransactionSum } from '../allTransactions.helpers';

import styles from './transactionDetailInfo.styles';

import TransactionCategory from './TransactionCategory/TransactionCategory';
import TransactionCardsInfo from './TransactionCardsInfo/TransactionCardsInfo';
import SenderPurpose from './SenderPurpose/SenderPurpose';

const TransactionDetailInfo: FC<TransactionDetailScreenProps> = ({ route }) => {
  const {
    category,
    currency,
    profit,
    sum,
    time,
    purpose,
    senderCardNumber,
    receiverCardNumber,
    senderName,
    receiverName,
  } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.transactionDetailHeader}>
        <Text style={styles.senderName}>
          {profit ? receiverName : senderName}
        </Text>
        <Text style={styles.transactionDate}>{getFormatedDate(time)}</Text>
        <TransactionCategory category={category} />
        <Text style={styles.transactionSum}>
          {getTransactionSum(profit, sum, currency)}
        </Text>
      </View>
      <TransactionCardsInfo
        senderCardNumber={senderCardNumber}
        receiverCardNumber={receiverCardNumber}
      />
      {purpose ? (
        <SenderPurpose text={purpose} />
      ) : (
        <Text style={styles.noPurposeText}>
          The sender didn't write a message for you.
        </Text>
      )}
    </ScrollView>
  );
};

export default TransactionDetailInfo;
