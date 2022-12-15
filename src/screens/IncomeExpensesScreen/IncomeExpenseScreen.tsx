import React, { useRef, useState } from 'react';
import {
  ListRenderItem,
  Text,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';

import AppLoadingScreen from 'screens/AppLoadingScreen/AppLoadingScreen';

import {
  useGetAllUserTransactionsQuery,
  useGetUserExpensesQuery,
} from 'services/index';

import DepositWithdrawlsSection from 'components/DepositWithdrawlsSection/DepositWithdrawlsSection';

import TitleText from 'components/TitleText/TitleText';

import IncomeExpensesCard from './IncomeExpensesCard/IncomeExpensesCard';
import { IIncomeExpensesCardProps } from './IncomeExpensesCard/incomeExpensesCard.types';

import IncomeExpensesPieChart from './IncomeExpensesPieChart/IncomeExpensesPieChart';

import styles from './incomeExpensesScreen.styles';

const IncomeExpensesScreen = () => {
  const [monthIndex, setMonthIndex] = useState(0);
  const listRef = useRef<FlatList>(null);

  const {
    data: expensesData,
    isLoading: fetchingExpenses,
    refetch: refetchingExpenses,
    isFetching: isRefetchingExpenses,
  } = useGetUserExpensesQuery();

  const {
    data: transactionsData,
    isLoading: fetchingTransactions,
    refetch: refetchingTransactions,
    isFetching: isRefetchingTransactions,
  } = useGetAllUserTransactionsQuery();

  const listScrollToStart = () => {
    if (listRef.current) {
      listRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
    }
  };

  const handleLeftButton = () => {
    setMonthIndex(monthIndex - 1 < 0 ? monthIndex : monthIndex - 1);
    listScrollToStart();
  };

  const handleRightButton = () => {
    setMonthIndex(
      monthIndex + 1 >= expensesData!.length ? monthIndex : monthIndex + 1,
    );
    listScrollToStart();
  };

  const onRefresh = () => {
    refetchingTransactions();
    refetchingExpenses();
  };

  const refreshControl = (
    <RefreshControl
      refreshing={isRefetchingTransactions && isRefetchingExpenses}
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

  if (fetchingTransactions || fetchingExpenses) {
    return <AppLoadingScreen />;
  }

  return (
    <ScrollView
      style={styles.screen}
      nestedScrollEnabled
      refreshControl={refreshControl}>
      <Text style={styles.screenTitle}>Budget</Text>
      {expensesData && transactionsData ? (
        <>
          <IncomeExpensesPieChart
            sum={expensesData[monthIndex].sum}
            year={expensesData[monthIndex].year}
            month={expensesData[monthIndex].month}
            currency={expensesData[monthIndex].currency}
            categories={expensesData[monthIndex].categories}
            leftButtonOnpress={handleLeftButton}
            rightButtonOnPress={handleRightButton}
          />
          <FlatList
            ref={listRef}
            data={expensesData[monthIndex].categories}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
          <DepositWithdrawlsSection transactions={transactionsData!} />
        </>
      ) : (
        <TitleText text={"You don't have expenses"} />
      )}
    </ScrollView>
  );
};

export default IncomeExpensesScreen;
