import { Text, View } from 'react-native';
import React from 'react';

import AppLoadingScreen from 'screens/AppLoadingScreen/AppLoadingScreen';

import TitleText from 'components/TitleText/TitleText';

import { useGetAllUserTransactionsQuery } from 'services/index';

import AllTransactionsList from './AllTransactionsList/AllTransactionsList';
import styles from './allTransactionsScreen.styles';

const AllTransactionsScreen = () => {
  const { data, isLoading } = useGetAllUserTransactionsQuery();

  if (isLoading) {
    return <AppLoadingScreen />;
  }

  return (
    <View style={styles.screen}>
      <TitleText text="All transactions" />
      {data ? (
        <AllTransactionsList transactions={data} />
      ) : (
        <Text>There's no transactions</Text>
      )}
    </View>
  );
};

export default AllTransactionsScreen;
