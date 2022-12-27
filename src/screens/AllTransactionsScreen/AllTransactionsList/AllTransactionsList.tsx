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
    id={item.id}
    currency={item.currency}
    sum={item.sum}
    provider={item.provider}
    time={item.time}
    profit={item.profit}
    category={item.category}
    purpose={item.purpose}
    senderName={item.senderName}
    receiverName={item.receiverName}
    senderCardNumber={item.senderCardNumber}
    receiverCardNumber={item.receiverCardNumber}
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
