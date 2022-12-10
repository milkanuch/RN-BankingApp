import { View } from 'react-native';
import React, { FC } from 'react';

import { CardType } from 'components/Card/card.types';

import styles from './cardTypeSelector.styles';
import CardTypeSelectorItem from './CardTypeSelectorItem/CardTypeSelectorItem';
import { ICardTypeSelectorProps } from './cardTypeSelector.types';

const CardTypeSelector: FC<ICardTypeSelectorProps> = ({
  currentCardType,
  setCardType,
}) => {
  const cardTypes = Object.keys(CardType);
  return (
    <View style={styles.container}>
      {cardTypes.map(cardType => (
        <CardTypeSelectorItem
          key={cardType}
          cardType={cardType}
          selected={currentCardType === cardType}
          onPress={setCardType}
        />
      ))}
    </View>
  );
};

export default CardTypeSelector;
