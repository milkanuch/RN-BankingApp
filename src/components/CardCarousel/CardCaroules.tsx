import { FlatList, ListRenderItem, ViewToken } from 'react-native';
import React, { FC, useRef, useState } from 'react';

import Card from '../Card/Card';
import { ICardProps } from '../Card/card.types';

import { ICardCarouselProps } from './cardCarousel.types';
import { viewConfig } from './cardCarousel.settings';
import styles from './cardCarousel.styles';
import CardCarouselIndicator from './CardCarouselIndicator/CardCarouselIndicator';

const renderItem: ListRenderItem<ICardProps> = ({ item }) => {
  return <Card {...item} />;
};

const keyExtractor: (item: ICardProps, index: number) => string = (
  item: ICardProps,
) => {
  return item.cardNumber;
};

const CardCaroules: FC<ICardCarouselProps> = ({
  cards,
  onChange,
  showIndicator,
}) => {
  const [index, setIndex] = useState(0);
  const viewConfigRef = useRef(viewConfig);

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
        data={cards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangedRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      {showIndicator && (
        <CardCarouselIndicator currentIndex={index} data={cards} />
      )}
    </>
  );
};

export default CardCaroules;
