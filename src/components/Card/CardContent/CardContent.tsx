import { View } from 'react-native';
import React, { FC } from 'react';

import CardHeader from '../CardHeader/CardHeader';
import MoneyText from '../MoneyText/MoneyText';
import CardFooter from '../CardFooter/CardFooter';

import styles from './cardContent.styles';

import { ICardContentProps } from './cardContent.types';

const CardContent: FC<ICardContentProps> = ({
  title,
  showDetailsIconButton,
  money,
  currency,
  cardNumber,
  expirationDate,
  cardProvider,
  isSecured,
}) => {
  return (
    <View style={styles.container}>
      <CardHeader title={title} showDetailsIconButton={showDetailsIconButton} />
      <MoneyText money={money} currency={currency} />
      <CardFooter
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardProvider={cardProvider}
        isSecured={isSecured}
      />
    </View>
  );
};

export default CardContent;
