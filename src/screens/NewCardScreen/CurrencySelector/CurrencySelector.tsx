import { View } from 'react-native';
import React, { FC } from 'react';

import { Currency } from 'components/Card/card.types';

import { ICurrencySelectorProps } from './currencySelector.types';
import styles from './currencySelector.styles';
import CurrencySelectorItem from './CurrencySelectorItem/CurrencySelectorItem';

const CurrencySelector: FC<ICurrencySelectorProps> = ({
  currentCurrency,
  setCurrency,
}) => {
  const currencies = Object.keys(Currency);
  return (
    <View style={styles.container}>
      {currencies.map(currency => (
        <CurrencySelectorItem
          key={currency}
          currency={currency}
          selected={currentCurrency === currency}
          onPress={setCurrency}
        />
      ))}
    </View>
  );
};

export default CurrencySelector;
