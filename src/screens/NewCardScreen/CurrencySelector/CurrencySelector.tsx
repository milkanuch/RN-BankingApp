import { View } from 'react-native';
import React, { FC } from 'react';

import { currencies } from './currencySelector.settings';
import { ICurrencySelectorProps } from './currencySelector.types';
import styles from './currencySelector.styles';
import CurrencySelectorItem from './CurrencySelectorItem/CurrencySelectorItem';

const CurrencySelector: FC<ICurrencySelectorProps> = ({
  currentCurrency,
  setCurrency,
}) => {
  return (
    <View style={styles.container}>
      {currencies.map((currency: string) => (
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
