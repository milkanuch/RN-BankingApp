import { TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './card.styles';
import { ICardProps } from './card.types';
import {
  activeOpacity,
  blockIconColor,
  blockIconName,
  blockIconSize,
  snackbarMessage,
} from './card.settings';
import { copyTextToClipboard, showSnackBar } from './card.helper';
import CardContent from './CardContent/CardContent';

const Card: FC<ICardProps> = ({
  cardType,
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
      <CardContent
        cardType={cardType}
        isSecured={isSecured}
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardProvider={cardProvider}
        money={money}
        currency={currency}
        showDetailsIconButton={showDetailsIconButton}
      />
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
