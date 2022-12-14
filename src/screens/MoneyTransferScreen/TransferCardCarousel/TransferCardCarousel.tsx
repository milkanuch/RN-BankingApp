import { View, ListRenderItem, ViewToken } from 'react-native';
import React, { FC, useRef } from 'react';

import { FlatList } from 'react-native-gesture-handler';

import { viewConfig } from 'components/CardCarousel/cardCarousel.settings';

import { ICardResponseParams } from 'services/bankApi.types';

import { ITransferCardCarouselProps } from './transferCardCarousel.types';
import TransferCardCarouselItem from './TransferCardCarouselItem/TransferCardCarouselItem';

import styles from './transferCardCarousel.styles';

const renderItem: ListRenderItem<ICardResponseParams> = ({ item }) => (
  <TransferCardCarouselItem
    cardNumber={item.cardNumber}
    provider={item.providerEntity.providerName}
    type={item.cardType.name}
    sum={item.sum}
    currency={item.currencyName}
  />
);

const keyExtractor: (item: ICardResponseParams, index: number) => string = (
  item: ICardResponseParams,
) => item.cardNumber;

const TransferCardCarousel: FC<ITransferCardCarouselProps> = ({
  cards = [],
  onChange,
}) => {
  const viewConfigRef = useRef(viewConfig);

  const onViewChange = ({ changed }: { changed: ViewToken[] }) => {
    if (changed[0].isViewable && changed[0].index !== null) {
      onChange && onChange(changed[0].index);
    }
  };

  const onViewChangedRef = useRef(onViewChange);
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangedRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
};

export default TransferCardCarousel;
