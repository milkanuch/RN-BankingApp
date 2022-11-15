import { View, Text } from 'react-native';
import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { ITransferCardCarouselItemProps } from './transferCardCarouselItem.types';
import styles from './transferCardCarouselItem.styles';
import {
  currencies,
  iconColor,
  iconSize,
  providerIconName,
} from './transferCardCarouselItem.settings';

const TransferCardCarouselItem: FC<ITransferCardCarouselItemProps> = ({
  cardNumber,
  provider,
  type,
  sum,
  currency,
}) => {
  const cardLastNumbers = cardNumber.slice(12, 16);
  return (
    <View style={styles.container}>
      <Icon
        name={providerIconName[provider]}
        size={iconSize}
        color={iconColor}
      />
      <View style={styles.textContainer}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
          {cardLastNumbers + ' ' + type}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.moneyText}>
          {sum.toFixed(2) + ' ' + currencies[currency]}
        </Text>
      </View>
    </View>
  );
};

export default TransferCardCarouselItem;
