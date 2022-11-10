import { TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './card.styles';
import CardHeader from './CardHeader/CardHeader';
import { ICardProps } from './card.types';
import MoneyText from './MoneyText/MoneyText';
import CardFooter from './CardFooter/CardFooter';
import {
  activeOpacity,
  blockIconColor,
  blockIconName,
  blockIconSize,
  snackbarMessage,
} from './card.settings';
import { copyTextToClipboard, showSnackBar } from './card.helper';

const Card: FC<ICardProps> = ({
  title,
  showDetailsIconButton,
  cardNumber,
  cardProvider,
  expirationDate,
  money,
  currency,
  blocked,
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
      style={[styles.container, blocked && styles.blockedBackground]}
      activeOpacity={activeOpacity}>
      <View style={styles.circle} />
      <View style={styles.rectangle} />
      <View style={styles.triangle} />
      <View style={styles.cardContainer}>
        <CardHeader
          title={title}
          showDetailsIconButton={showDetailsIconButton}
        />
        <MoneyText money={money} currency={currency} />
        <CardFooter
          cardNumber={cardNumber}
          expirationDate={expirationDate}
          cardProvider={cardProvider}
          isSecured={isSecured}
        />
      </View>
      {blocked && (
        <View style={styles.blocked}>
          <Icon
            name={blockIconName}
            color={blockIconColor}
            size={blockIconSize}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Card;
