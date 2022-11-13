import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

import { ICardTypeSelectorItemProps } from './cardTypeSelectorItem.types';
import styles from './cardTypeSelectorItem.styles';
import { activeOpacity, numberOfLines } from './cardTypeSelectorItem.settings';

const CardTypeSelectorItem: FC<ICardTypeSelectorItemProps> = ({
  cardType,
  selected,
  onPress,
}) => {
  const handleOnPress = () => onPress(cardType);
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={handleOnPress}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={numberOfLines}
        style={[styles.text, selected && styles.selectedText]}>
        {cardType}
      </Text>
    </TouchableOpacity>
  );
};

export default CardTypeSelectorItem;
