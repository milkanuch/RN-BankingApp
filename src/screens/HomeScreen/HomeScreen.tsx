import React from 'react';

import { ScrollView } from 'react-native';

import CardCaroules from '../../components/CardCarousel/CardCarousel';
import FrequentlyUsedFunctions from '../../components/FrequentlyUsedFunctions/FrequentlyUsedFunctions';

import {
  CardProvider,
  CardType,
  Currency,
  ICardProps,
} from '../../components/Card/card.types';

import DepositWithdrawlsSection from '../../components/DepositWithdrawlsSection/DepositWithdrawlsSection';

import { IDepositWithdrawlsSectionProps } from '../../components/DepositWithdrawlsSection/depositWithdrawlsSection.types';

import styles from './homeScreen.styles';

const cards: ICardProps[] = [
  {
    cardNumber: '1234 9999 4355 3353',
    cardType: CardType.Debit,
    showDetailsIconButton: true,
    cardProvider: CardProvider.Visa,
    expirationDate: new Date(Date.now()),
    money: 10000,
    currency: Currency.USD,
    blocked: false,
  },
  {
    cardNumber: '2956 9999 4355 3353',
    cardType: CardType.Credit,
    showDetailsIconButton: true,
    cardProvider: CardProvider.Mastercard,
    expirationDate: new Date(Date.now()),
    money: 200600,
    currency: Currency.USD,
    blocked: false,
  },
];

const transactions: IDepositWithdrawlsSectionProps = {
  transactions: [
    {
      cardProvider: 'VISA card',
      date: '2022.11.14',
      total: 25000,
      currency: 'UAH',
    },
    {
      cardProvider: 'VISA card',
      date: '2022.11.14',
      total: 25000,
      currency: 'UAH',
    },
    {
      cardProvider: 'VISA card',
      date: '2022.11.14',
      total: 25000,
      currency: 'UAH',
    },
    {
      cardProvider: 'VISA card',
      date: '2022.11.14',
      total: 25000,
      currency: 'UAH',
    },
    {
      cardProvider: 'VISA card',
      date: '2022.11.14',
      total: 25000,
      currency: 'UAH',
    },
    {
      cardProvider: 'VISA card last',
      date: '2022.11.14',
      total: 25000,
      currency: 'UAH',
    },
  ],
};

const HomeScreen = () => {
  return (
    <ScrollView style={styles.screen} nestedScrollEnabled>
      <CardCaroules cards={cards} showIndicator />
      <FrequentlyUsedFunctions />
      <DepositWithdrawlsSection {...transactions} />
    </ScrollView>
  );
};

export default HomeScreen;
