import { View } from 'react-native';
import React, { FC } from 'react';

import { ICardCarouselIndicatorProps } from './cardCarouselIndicator.types';
import CardCarouselIndicatorItem from './CardCarouselIndicatorItem/CardCarouselIndicatorItem';
import styles from './cardCarouselIndicator.styles';

const CardCarouselIndicator: FC<ICardCarouselIndicatorProps> = ({
  data,
  currentIndex,
}) => {
  return (
    <View style={styles.container}>
      {data.map((_value, index) => {
        const isSelected = index === currentIndex;
        const key = index.toString();
        return <CardCarouselIndicatorItem key={key} isSelected={isSelected} />;
      })}
    </View>
  );
};

export default CardCarouselIndicator;
