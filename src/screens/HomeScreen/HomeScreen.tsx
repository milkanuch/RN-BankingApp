import React from 'react';
import { RefreshControl, ScrollView, Text } from 'react-native';

import CardCaroules from '../../components/CardCarousel/CardCarousel';
import FrequentlyUsedFunctions from '../../components/FrequentlyUsedFunctions/FrequentlyUsedFunctions';
import DepositWithdrawlsSection from '../../components/DepositWithdrawlsSection/DepositWithdrawlsSection';
import {
  useGetAllCardsQuery,
  useGetAllUserTransactionsQuery,
} from '../../services';
import AppLoadingScreen from '../AppLoadingScreen/AppLoadingScreen';

import styles from './homeScreen.styles';
import { homeTitle } from './homeScreen.settings';

const HomeScreen = () => {
  const {
    data: cardsData,
    isLoading: fetchingCards,
    refetch: cardsRefetch,
    isFetching: isCardsRefatching,
  } = useGetAllCardsQuery();

  const {
    data: transactionsData,
    isLoading: fetchingTransactions,
    refetch: refetchingTransactions,
    isFetching: isRefetchingTransactions,
  } = useGetAllUserTransactionsQuery();

  const onRefresh = () => {
    refetchingTransactions();
    cardsRefetch();
  };

  const refreshControl = (
    <RefreshControl
      refreshing={isRefetchingTransactions && isCardsRefatching}
      onRefresh={onRefresh}
    />
  );

  if (fetchingCards || fetchingTransactions) {
    return <AppLoadingScreen />;
  }

  return (
    <ScrollView
      style={styles.screen}
      nestedScrollEnabled
      refreshControl={refreshControl}>
      <Text style={styles.title}>{homeTitle}</Text>
      <CardCaroules cards={cardsData?.ok!} showIndicator />
      <FrequentlyUsedFunctions />
      <DepositWithdrawlsSection transactions={transactionsData!} />
    </ScrollView>
  );
};

export default HomeScreen;
