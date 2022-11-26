import { Text, View } from 'react-native';
import React from 'react';

import { useGetAllUserTransactionsQuery } from '../../services';

import TitleText from '../../components/TitleText/TitleText';

import AppLoadingScreen from '../AppLoadingScreen/AppLoadingScreen';

import styles from './allTransactionsScreen.styles';
import AllTransactionsList from './AllTransactionsList/AllTransactionsList';

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
