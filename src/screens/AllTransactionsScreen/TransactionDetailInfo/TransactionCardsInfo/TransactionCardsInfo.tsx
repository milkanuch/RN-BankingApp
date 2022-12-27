import { View, Text } from 'react-native';
import React, { FC } from 'react';

import { formatedCardNumber } from 'helpers/card';

import styles from './transactionCardsInfo.styles';
import { ITransactionsCardsInfo } from './transactionCardsInfo.types';

const TransactionDetailCardsInfo: FC<ITransactionsCardsInfo> = ({
  senderCardNumber,
  receiverCardNumber,
}) => {
  return (
    <View style={styles.cardsInfoContainer}>
      <Text style={styles.cardSenderTitle}>Sender card number:</Text>
      <Text style={styles.cardNumber}>
        {formatedCardNumber(senderCardNumber)}
      </Text>
      <Text style={styles.cardSenderTitle}>Receiver card number: </Text>
      <Text style={styles.cardNumber}>
        {formatedCardNumber(receiverCardNumber)}
      </Text>
    </View>
  );
};

export default TransactionDetailCardsInfo;
