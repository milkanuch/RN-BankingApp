import { View, Text } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from 'constants/colors';
import { formatDate, showCardNumber } from 'helpers/card';

import styles from './cardFooter.styles';
import { ICardFooterInnerProps } from './cardFooter.types';
import { cardProviderIconName, iconSize } from './cardFooter.settings';

const CardFooter: FC<ICardFooterInnerProps> = ({
  cardNumber,
  expirationDate,
  cardProvider,
  isSecured,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{showCardNumber(cardNumber, isSecured)}</Text>
      <Text style={styles.text}>{formatDate(expirationDate)}</Text>
      <Icon
        name={cardProviderIconName[cardProvider]}
        style={styles.icon}
        color={COLORS.white}
        size={iconSize}
      />
    </View>
  );
};

export default CardFooter;
