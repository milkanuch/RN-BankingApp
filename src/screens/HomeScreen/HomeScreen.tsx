import { View } from 'react-native';
import React from 'react';

import CardCaroules from '../../components/CardCarousel/CardCaroules';

import {
  CardProvider,
  Currency,
  ICardProps,
} from '../../components/Card/card.types';

import styles from './homeScreen.styles';

const cards: ICardProps[] = [
  {
    cardNumber: '1234 9999 4355 3353',
    title: 'Card 1',
    showDetailsIconButton: true,
    cardProvider: CardProvider.Visa,
    expirationDate: new Date(Date.now()),
    money: 10000,
    currency: Currency.USD,
    blocked: false,
  },
  {
    cardNumber: '2956 9999 4355 3353',
    title: 'Card 2',
    showDetailsIconButton: true,
    cardProvider: CardProvider.Mastercard,
    expirationDate: new Date(Date.now()),
    money: 200600,
    currency: Currency.USD,
    blocked: false,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <CardCaroules cards={cards} showIndicator />
    </View>
  );
};

export default HomeScreen;
