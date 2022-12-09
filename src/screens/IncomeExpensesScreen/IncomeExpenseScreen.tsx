import React, { useState } from 'react';
import {
  ListRenderItem,
  Text,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';

import DepositWithdrawlsSection from '../../components/DepositWithdrawlsSection/DepositWithdrawlsSection';
import { useGetAllUserTransactionsQuery } from '../../services';

import AppLoadingScreen from '../AppLoadingScreen/AppLoadingScreen';

import IncomeExpensesCard from './IncomeExpensesCard/IncomeExpensesCard';
import { IIncomeExpensesCardProps } from './IncomeExpensesCard/incomeExpensesCard.types';

import IncomeExpensesPieChart from './IncomeExpensesPieChart/IncomeExpensesPieChart';

import styles from './incomeExpensesScreen.styles';

const dummyData = [
  {
    month: 'November',
    year: '2022',
    sum: 1448,
    currency: 'USD',
    categories: [
      {
        category: 'Food',
        totalSpendPerMonth: 500,
        currency: 'USD',
        totalSum: 1448,
      },
      {
        category: 'Other',
        totalSpendPerMonth: 888,
        currency: 'USD',
        totalSum: 1448,
      },
      {
        category: 'Transport',
        totalSpendPerMonth: 995,
        currency: 'USD',
        totalSum: 1448,
      },
      {
        category: 'Clothes',
        totalSpendPerMonth: 444,
        currency: 'USD',
        totalSum: 1448,
      },
    ],
  },
  {
    month: 'December',
    year: '2022',
    sum: 8881,
    currency: 'USD',
    categories: [
      {
        category: 'Food',
        totalSpendPerMonth: 7000,
        currency: 'USD',
        totalSum: 8881,
      },
      {
        category: 'Other',
        totalSpendPerMonth: 700,
        currency: 'USD',
        totalSum: 8881,
      },
      {
        category: 'Transport',
        totalSpendPerMonth: 1500,
        currency: 'USD',
        totalSum: 8881,
      },
      {
        category: 'Clothes',
        totalSpendPerMonth: 2000,
        currency: 'USD',
        totalSum: 8881,
      },
    ],
  },
];

const IncomeExpensesScreen = () => {
  const [monthIndex, setMonthIndex] = useState(0);

  const {
    data: transactionsData,
    isLoading: fetchingTransactions,
    refetch: refetchingTransactions,
    isFetching: isRefetchingTransactions,
  } = useGetAllUserTransactionsQuery();

  const handleLeftButton = () => {
    setMonthIndex(monthIndex - 1 < 0 ? monthIndex : monthIndex - 1);
  };

  const handleRightButton = () => {
    setMonthIndex(
      monthIndex + 1 >= dummyData.length ? monthIndex : monthIndex + 1,
    );
  };

  const onRefresh = () => {
    refetchingTransactions();
  };

  const refreshControl = (
    <RefreshControl
      refreshing={isRefetchingTransactions}
      onRefresh={onRefresh}
    />
  );

  const keyExtractor = (item: IIncomeExpensesCardProps, index: number) =>
    item.category + index.toString();

  const renderItem: ListRenderItem<IIncomeExpensesCardProps> = ({ item }) => (
    <IncomeExpensesCard
      category={item.category}
      totalSpendPerMonth={item.totalSpendPerMonth}
      totalSum={item.totalSum}
      currency={item.currency}
    />
  );

  if (fetchingTransactions) {
    return <AppLoadingScreen />;
  }

  return (
    <ScrollView
      style={styles.screen}
      nestedScrollEnabled
      refreshControl={refreshControl}>
      <Text style={styles.screenTitle}>Budget</Text>
      <IncomeExpensesPieChart
        sum={dummyData[monthIndex].sum}
        year={dummyData[monthIndex].year}
        month={dummyData[monthIndex].month}
        currency={dummyData[monthIndex].currency}
        categories={dummyData[monthIndex].categories}
        leftButtonOnpress={handleLeftButton}
        rightButtonOnPress={handleRightButton}
      />
      <FlatList
        data={dummyData[monthIndex].categories}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <DepositWithdrawlsSection transactions={transactionsData!} />
    </ScrollView>
  );
};

export default IncomeExpensesScreen;
