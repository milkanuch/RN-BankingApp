import { View, Text } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../../../constants/colors';

import styles from './cardFooter.styles';
import { ICardFooterInnerProps } from './cardFooter.types';
import { formatDate, showCardNumber } from './cardFooter.helper';
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
        color={colors.white}
        size={iconSize}
      />
    </View>
  );
};

export default CardFooter;
