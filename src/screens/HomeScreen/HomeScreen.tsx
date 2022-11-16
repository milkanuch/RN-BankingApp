import React from 'react';

import { ActivityIndicator, ScrollView, View } from 'react-native';

import CardCaroules from '../../components/CardCarousel/CardCarousel';
import FrequentlyUsedFunctions from '../../components/FrequentlyUsedFunctions/FrequentlyUsedFunctions';

import DepositWithdrawlsSection from '../../components/DepositWithdrawlsSection/DepositWithdrawlsSection';

import {
  useGetAllCardsQuery,
  useGetAllUserTransactionsQuery,
} from '../../services';

import styles from './homeScreen.styles';

const HomeScreen = () => {
  const { data: cardsData, isLoading: fetchingCards } = useGetAllCardsQuery();
  const { data: transactionsData, isLoading: fetchingTransactions } =
    useGetAllUserTransactionsQuery();

  if (fetchingCards || fetchingTransactions) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} nestedScrollEnabled>
      <CardCaroules cards={cardsData?.ok!} showIndicator />
      <FrequentlyUsedFunctions />
      <DepositWithdrawlsSection transactions={transactionsData!} />
    </ScrollView>
  );
};

export default HomeScreen;
