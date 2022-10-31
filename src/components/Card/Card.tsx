import { TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';

import styles from './card.styles';
import CardHeader from './CardHeader/CardHeader';
import { ICardProps } from './card.types';
import MoneyText from './MoneyText/MoneyText';
import CardFooter from './CardFooter/CardFooter';
import { activeOpacity, snackbarMessage } from './card.settings';
import { copyTextToClipboard, showSnackBar } from './card.helper';

const Card: FC<ICardProps> = ({
  title,
  iconName,
  cardNumber,
  cardProvider,
  expirationDate,
  onIconPress,
  money,
  currency,
}) => {
  const [isSecured, setSecured] = useState(true);
  const handleLongPress = () => {
    setSecured(!isSecured);
    copyTextToClipboard(cardNumber);
    showSnackBar(snackbarMessage);
  };
  return (
    <TouchableOpacity
      onLongPress={handleLongPress}
      style={styles.container}
      activeOpacity={activeOpacity}>
      <View style={styles.circle} />
      <View style={styles.rectangle} />
      <View style={styles.triangle} />
      <View style={styles.cardContainer}>
        <CardHeader
          title={title}
          iconName={iconName}
          onIconPress={onIconPress}
        />
        <MoneyText money={money} currency={currency} />
        <CardFooter
          cardNumber={cardNumber}
          expirationDate={expirationDate}
          cardProvider={cardProvider}
          isSecured={isSecured}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
