import { View, Text } from 'react-native';
import React, { FC } from 'react';

import { currencies } from 'screens/MoneyTransferScreen/TransferCardCarousel/TransferCardCarouselItem/transferCardCarouselItem.settings';

import styles from './centerLabelComponent.styles';
import { ICenterLabelProps } from './centerLabelComponent.types';

const CenterLabel: FC<ICenterLabelProps> = ({ sum, currency, month, year }) => {
  return (
    <View style={styles.centerLabelContainer}>
      <Text style={styles.monthText}>{month}</Text>
      <Text style={styles.yearText}>{year}</Text>
      <Text style={styles.totalSpendText}>{sum + currencies[currency]}</Text>
    </View>
  );
};

export default CenterLabel;
