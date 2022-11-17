import { View, Text } from 'react-native';
import React, { FC } from 'react';

import { TouchableHighlight } from 'react-native-gesture-handler';

import styles from './depositWithdrawlsSectionItem.styles';
import { IDepositWithdrawlsSectionItemProps } from './depositWithdrawlsSectionItem.types';

const DepositWithdrawlsSectionItem: FC<IDepositWithdrawlsSectionItemProps> = ({
  cardProvider,
  currency,
  date,
  total,
}) => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardProvider}>{cardProvider}</Text>
          <Text style={styles.date}>{date.toLocaleDateString()}</Text>
        </View>
        <View style={styles.money}>
          <Text style={styles.total}>{total}</Text>
          <Text style={styles.currency}>{currency}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export default DepositWithdrawlsSectionItem;
