import { View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import { ITransactionParams } from '../../services/bankApi.types';

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

import { useGetAllCardsQuery, useTransactionMutation } from '../../services';

import {
  TransferScreenProps,
  TransferStackScreenTypes,
} from '../../navigation/TransferStackNavigation/transferStackNavigation.types';

import AppLoadingScreen from '../AppLoadingScreen/AppLoadingScreen';

import {
  buttonText,
  cardCarouselTitle,
  cardNumberContentType,
  cardNumberTitle,
  errorText,
  messageTitle,
  moneyKeyboardType,
  moneyTitle,
  nameTitle,
  screenTitle,
} from './moneyTransferScreen.settings';

import TransferCardCarousel from './TransferCardCarousel/TransferCardCarousel';

import styles from './moneyTransferScreen.styles';

const MoneyTransferScreen: FC<TransferScreenProps> = ({ navigation }) => {
  const [selectedCardIndex, selectCard] = useState(0);
  const [receiverCardNumber, setReceiverCardNumber] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [amountOfMoney, setAmountOfMoney] = useState('');
  const [messageText, setMessageText] = useState('');

  const { data: cardsData, isLoading: isLoadingCards } = useGetAllCardsQuery();

  const handleSetMoney = (value: string) => {
    if (Number.isNaN(+value)) {
      return;
    }
    setAmountOfMoney(value.replace(/^0+/, ''));
  };

  const [
    sendTransaction,
    {
      isLoading: isLoadingTransaction,
      isSuccess,
      isError,
      reset,
      status,
      data: transactionSendData,
    },
  ] = useTransactionMutation();

  useEffect(() => {
    if (isSuccess || isError) {
      const message =
        status === QueryStatus.fulfilled
          ? transactionSendData!.message
          : errorText;
      navigation.navigate(TransferStackScreenTypes.TransferStatus, {
        isSuccess,
        message,
      });
    }
  }, [isSuccess, isError, status, transactionSendData, reset, navigation]);

  const handleSend = async () => {
    if (!cardsData) {
      return;
    }
    const selectedCard = cardsData.ok[selectedCardIndex];
    const transactionData: ITransactionParams = {
      senderCardNumber: selectedCard.cardNumber,
      receiverCardNumber,
      receiverName,
      sum: +amountOfMoney,
      purpose: messageText,
    };
    try {
      await sendTransaction(transactionData).unwrap();
    } catch (error) {}
  };

  const isValid =
    cardNumberValidation(receiverCardNumber) &&
    credentialsValidation(receiverName) &&
    moneyValidation(amountOfMoney);

  if (isLoadingCards || isLoadingTransaction) {
    return <AppLoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText text={screenTitle} />
        <TitleText text={cardCarouselTitle} subtitle />
        <TransferCardCarousel cards={cardsData?.ok} onChange={selectCard} />
        <CustomTextInput
          value={receiverCardNumber}
          setValue={setReceiverCardNumber}
          title={cardNumberTitle}
          style={styles.textInputContainer}
          keyboardType={moneyKeyboardType}
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
};

export default MoneyTransferScreen;
