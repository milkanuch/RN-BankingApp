import { Text, View } from 'react-native';
import React, { FC } from 'react';

import { currencies } from 'constants/card';

import styles from './moneyText.styles';
import { IMoneyTextProps } from './moneyText.types';
import { maxNumberOfLines } from './moneyText.settings';
import { numberWithCommas } from './moneyText.helper';

const MoneyText: FC<IMoneyTextProps> = ({ money, currency }) => {
  const moneyText = currencies[currency] + numberWithCommas(money);

  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={maxNumberOfLines}>
        {moneyText}
      </Text>
    </View>
  );
};

export default MoneyText;
