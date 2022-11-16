import { Text, View } from 'react-native';
import React, { FC } from 'react';

import HomeSubtitle from '../HomeSubtitle/HomeSubtitle';

import styles from './depositWithdrawlsSection.styles';

import { IDepositWithdrawlsSectionProps } from './depositWithdrawlsSection.types';
import DepositWithdrawlsSectionItem from './DepositWithdrawlsSectionItem/DepositWithdrawlsSectionItem';
import {
  buttonTitle,
  onPress,
  title,
} from './depositWithdrawlsSection.settings';

const DepositWithdrawlsSection: FC<IDepositWithdrawlsSectionProps> = ({
  transactions,
}) => {
  const trnasactionsData = transactions.map(transaction => ({
    cardProvider: transaction.provider,
    date: new Date(transaction.time),
    total: transaction.sum,
    currency: transaction.currency,
  }));
  return (
    <View style={styles.section}>
      <HomeSubtitle title={title} onPress={onPress} buttonTitle={buttonTitle} />
      <View style={styles.container}>
        {trnasactionsData ? (
          trnasactionsData
            .filter((item, index) => index < 5)
            .map((item, index) => (
              <DepositWithdrawlsSectionItem
                cardProvider={item.cardProvider}
                currency={item.currency}
                date={item.date}
                total={item.total}
                key={index}
              />
            ))
        ) : (
          <Text>Transaction doesn`t exist</Text>
        )}
      </View>
    </View>
  );
};

export default DepositWithdrawlsSection;
