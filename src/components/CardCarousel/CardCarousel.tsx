import { FlatList, ListRenderItem, ViewToken } from 'react-native';
import React, { FC, useRef, useState } from 'react';

import Card from '../Card/Card';
import { IAbstractCard, ICardProps } from '../Card/card.types';

import AddCardButton from './AddCardButton/AddCardButton';

import { IAddCardButtonProps } from './AddCardButton/addCardButton.types';

import { ICardCarouselProps } from './cardCarousel.types';
import { addCardProps, viewConfig } from './cardCarousel.settings';
import styles from './cardCarousel.styles';
import CardCarouselIndicator from './CardCarouselIndicator/CardCarouselIndicator';

function isAddButton(data: IAbstractCard): data is IAddCardButtonProps {
  return 'id' in data;
}

function isCard(data: IAbstractCard): data is ICardProps {
  return 'cardNumber' in data;
}

const renderItem: ListRenderItem<IAbstractCard> = ({ item }) => {
  if (isAddButton(item)) {
    return <AddCardButton {...item} />;
  }
  if (isCard(item)) {
    return <Card {...item} />;
  }
  return null;
};

const keyExtractor: (item: IAbstractCard, index: number) => string = (
  item: IAbstractCard,
) => {
  if (isAddButton(item)) {
    return item.id;
  }
  if (isCard(item)) {
    return item.cardNumber;
  }
  return '';
};

const CardCarousel: FC<ICardCarouselProps> = ({
  cards,
  onChange,
  showIndicator,
}) => {
  const cardsProps = cards?.map(card => ({
    cardNumber: card.cardNumber,
    cardProvider: card.providerEntity.providerName,
    cardType: card.cardType.name,
    showDetailsIconButton: true,
    expirationDate: new Date(card.expirationTime),
    money: card.sum,
    currency: card.currencyName,
    blocked: card.isBlocked,
  }));
  const [index, setIndex] = useState(0);
  const viewConfigRef = useRef(viewConfig);
  const data: IAbstractCard[] = [...cardsProps, addCardProps];

  const onViewChange = ({ changed }: { changed: ViewToken[] }) => {
    if (changed[0].isViewable && changed[0].index !== null) {
      setIndex(changed[0].index);
      onChange && onChange(changed[0].index);
    }
  };

  const onViewChangedRef = useRef(onViewChange);

  return (
    <>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangedRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      {showIndicator && (
        <CardCarouselIndicator currentIndex={index} data={data} />
      )}
    </>
  );
};

export default CardCarousel;
