import React, { FC } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { IUserTransactionResponseParams } from 'services/bankApi.types';

import AllTransactionsItem from '../AllTransactionsItem/AllTransactionsItem';

import { IAllTransactionListProps } from './allTransactionsList.types';

const renderItem: ListRenderItem<IUserTransactionResponseParams> = ({
  item,
}) => (
  <AllTransactionsItem
    currency={item.currency}
    sum={item.sum}
    provider={item.provider}
    time={item.time}
    profit={item.profit}
  />
);
const keyExtractor = (item: IUserTransactionResponseParams, index: number) =>
  item.time.toString() + index.toString();

const AllTransactionsList: FC<IAllTransactionListProps> = ({
  transactions,
}) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default AllTransactionsList;
