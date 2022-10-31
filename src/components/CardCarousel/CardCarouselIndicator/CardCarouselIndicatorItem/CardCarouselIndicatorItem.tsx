import { View } from 'react-native';
import React, { FC } from 'react';

import styles from './cardCarouselIndicatorItem.styles';
import { ICardCarouselIndicatorItemProps } from './cardCarouselIndicatorItem.types';

const CardCarouselIndicatorItem: FC<ICardCarouselIndicatorItemProps> = ({
  isSelected,
}) => {
  return <View style={[styles.container, isSelected && styles.selected]} />;
};

export default CardCarouselIndicatorItem;
