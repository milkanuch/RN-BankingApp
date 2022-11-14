import { View } from 'react-native';
import React, { FC } from 'react';

import { CardProvider } from '../../../components/Card/card.types';

import ProviderSelectorItem from './ProviderSelectorItem/ProviderSelectorItem';
import styles from './providerSelector.styles';
import { IProviderSelectorProps } from './providerSelector.types';

const ProviderSelector: FC<IProviderSelectorProps> = ({
  currentProvider,
  setProvider,
}) => {
  const cardProviders = Object.keys(CardProvider);
  return (
    <View style={styles.container}>
      {cardProviders.map(providerItem => (
        <ProviderSelectorItem
          key={providerItem}
          provider={providerItem}
          selected={currentProvider === providerItem}
          onPress={setProvider}
        />
      ))}
    </View>
  );
};

export default ProviderSelector;
