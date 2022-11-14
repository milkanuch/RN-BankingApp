import { View } from 'react-native';
import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

import { CardResponseParams } from '../../services/bankApi.types';

import TitleText from '../../components/TitleText/TitleText';

import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

import CustomButton from '../../components/CustomButton/CustomButton';

import {
  cardNumberValidation,
  credentialsValidation,
  moneyValidation,
} from '../../helpers/validation';

import {
  cardNumberErrorMessage,
  credentialsErrorMessage,
  moneyErrorMessage,
} from '../../constants/errorMesages';

import TransferCardCarousel from './TransferCardCarousel/TransferCardCarousel';

import styles from './moneyTransferScreen.styles';
import {
  buttonText,
  cardCarouselTitle,
  cardNumberContentType,
  cardNumberTitle,
  messageTitle,
  moneyKeyboardType,
  moneyTitle,
  nameTitle,
  screenTitle,
} from './moneyTransferScreen.settings';

const cards: CardResponseParams[] = [
  {
    cardNumber: '1111222233334444',
    creationTime: new Date(Date.now()),
    expirationTime: new Date(Date.now()),
    cvvCode: '435',
    pinCode: '1244',
    cardType: 'Credit',
    currencyName: 'UAH',
    provider: 'Visa',
    sum: 10000,
    sumLimit: 20000,
    isBlocked: false,
  },
  {
    cardNumber: '9999222233334444',
    creationTime: new Date(Date.now()),
    expirationTime: new Date(Date.now()),
    cvvCode: '435',
    pinCode: '1244',
    cardType: 'Credit',
    currencyName: 'UAH',
    provider: 'Visa',
    sum: 10000,
    sumLimit: 20000,
    isBlocked: false,
  },
];

export default function MoneyTransferScreen() {
  const [selectedCardIndex, selectCard] = useState(0);
  const [receiverCard, setReceiverCard] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [amountOfMoney, setAmountOfMoney] = useState('');
  const [messageText, setMessageText] = useState('');
  const selectedCard = cards[selectedCardIndex];
  selectedCard;

  const handleSetMoney = (value: string) => {
    if (Number.isNaN(+value)) {
      return;
    }
    setAmountOfMoney(value.replace(/^0+/, ''));
  };

  const handleSend = () => {};

  const isValid =
    cardNumberValidation(receiverCard) &&
    credentialsValidation(receiverName) &&
    moneyValidation(amountOfMoney);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText text={screenTitle} />
        <TitleText text={cardCarouselTitle} subtitle />
        <TransferCardCarousel cards={cards} onChange={selectCard} />
        <CustomTextInput
          value={receiverCard}
          setValue={setReceiverCard}
          title={cardNumberTitle}
          style={styles.textInputContainer}
          textContentType={cardNumberContentType}
          validation={cardNumberValidation}
          errorText={cardNumberErrorMessage}
        />
        <CustomTextInput
          value={receiverName}
          setValue={setReceiverName}
          title={nameTitle}
          style={styles.textInputContainer}
          validation={credentialsValidation}
          errorText={credentialsErrorMessage}
        />
        <CustomTextInput
          value={amountOfMoney.toString()}
          setValue={handleSetMoney}
          title={moneyTitle}
          style={styles.textInputContainer}
          keyboardType={moneyKeyboardType}
          validation={moneyValidation}
          errorText={moneyErrorMessage}
        />
        <CustomTextInput
          value={messageText}
          setValue={setMessageText}
          title={messageTitle}
          style={styles.textInputContainer}
        />
        <View style={styles.textInputContainer}>
          <CustomButton
            title={buttonText}
            onPress={handleSend}
            isDisabled={!isValid}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
