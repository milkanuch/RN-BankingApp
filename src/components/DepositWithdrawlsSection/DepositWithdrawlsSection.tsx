import { Text, View } from 'react-native';
import React, { FC } from 'react';

import { useNavigation } from '@react-navigation/native';

import HomeSubtitle from '../HomeSubtitle/HomeSubtitle';

import {
  DepositWidthdrawlsProps,
  HomeStackScreenTypes,
} from '../../navigation/HomeStackNavigation/homeStackNavigation.types';

import styles from './depositWithdrawlsSection.styles';

import { IDepositWithdrawlsSectionProps } from './depositWithdrawlsSection.types';
import DepositWithdrawlsSectionItem from './DepositWithdrawlsSectionItem/DepositWithdrawlsSectionItem';
import { buttonTitle, title } from './depositWithdrawlsSection.settings';

const DepositWithdrawlsSection: FC<IDepositWithdrawlsSectionProps> = ({
  transactions,
}) => {
  const { navigate } = useNavigation<DepositWidthdrawlsProps>();

  const transactionsData = transactions?.map(transaction => ({
    cardProvider: transaction.provider,
    date: new Date(transaction.time),
    total: transaction.profit
      ? `+${transaction.sum.toFixed(2)}`
      : (-transaction.sum).toFixed(2),
    currency: transaction.currency,
  }));

  const handleViewAllTransactions = () => {
    navigate(HomeStackScreenTypes.AllTransfers);
  };

  return (
    <View style={styles.section}>
      <HomeSubtitle
        title={title}
        onPress={handleViewAllTransactions}
        buttonTitle={buttonTitle}
        disabled={transactionsData && transactions.length < 5}
      />
      <View style={styles.container}>
        {transactionsData && !!transactions.length ? (
          transactionsData
            .filter((_, index) => index < 5)
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
          <View style={styles.emptyTransactionsContainer}>
            <Text style={styles.emptyTransactions}>
              Transactions doesn`t exist
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default DepositWithdrawlsSection;
