import { View } from 'react-native';
import React, { useState } from 'react';

import TitleText from '../../components/TitleText/TitleText';

import ProviderSelector from './ProviderSelector/ProviderSelector';
import styles from './newCardScreen.styles';
import CurrencySelector from './CurrencySelector/CurrencySelector';
import CardTypeSelector from './CardTypeSelector/CardTypeSelector';
import CreateCardButton from './CreateCardButton/CreateCardButton';
import {
  buttonText,
  cardTypeSubtitle,
  currencySubtitle,
  providerSubtitle,
  screenTitle,
} from './newCardScreen.settings';

const NewCardScreen = () => {
  const [currentProvider, setProvider] = useState('Visa');
  const [currentCurrency, setCurrency] = useState('UAH');
  const [currentCardType, setCardType] = useState('Debit');

  const handleOnPress = () => {};

  return (
    <View style={styles.container}>
      <TitleText text={screenTitle} />
      <TitleText text={providerSubtitle} subtitle />
      <ProviderSelector
        currentProvider={currentProvider}
        setProvider={setProvider}
      />
      <TitleText text={currencySubtitle} subtitle />
      <CurrencySelector
        currentCurrency={currentCurrency}
        setCurrency={setCurrency}
      />
      <TitleText text={cardTypeSubtitle} subtitle />
      <CardTypeSelector
        currentCardType={currentCardType}
        setCardType={setCardType}
      />
      <CreateCardButton title={buttonText} onPress={handleOnPress} />
    </View>
  );
};

export default NewCardScreen;
