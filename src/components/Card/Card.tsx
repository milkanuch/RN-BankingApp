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
  widthScale,
  onIconPress,
  money,
  currency,
}) => {
  const [isSecured, setSecured] = useState(true);
  const getStyles = styles(widthScale);
  const handleLongPress = () => {
    setSecured(!isSecured);
    copyTextToClipboard(cardNumber);
    showSnackBar(snackbarMessage);
  };
  return (
    <TouchableOpacity
      onLongPress={handleLongPress}
      style={getStyles.container}
      activeOpacity={activeOpacity}>
      <View style={getStyles.circle} />
      <View style={getStyles.rectangle} />
      <View style={getStyles.triangle} />
      <View style={getStyles.cardContainer}>
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
