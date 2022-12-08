import { View } from 'react-native';
import React, { FC } from 'react';

import CardSettingsItem from '../CardSettingsItem/CardSettingsItem';
import TitleText from '../../../components/TitleText/TitleText';

import {
  formatDate,
  formatedCardNumber,
} from '../../../components/Card/CardFooter/cardFooter.helper';

import AppLoadingScreen from '../../AppLoadingScreen/AppLoadingScreen';

import { useUserInfoQuery } from '../../../services';

import styles from './cardSettingsContent.styles';
import {
  cardExpirationTitle,
  cardHolderTitle,
  cardInformationTitle,
  cardNumberIconName,
  cardNumberTitle,
  securityCodeTitle,
} from './cardSettingsContent.settings';
import { ICardSettingsContentProps } from './cardSettingsContent.types';

const CardSettingsContent: FC<ICardSettingsContentProps> = ({
  cardNumber,
  expirationDate,
  securityCode,
}) => {
  const { data, isLoading } = useUserInfoQuery();
  const cardHolderConter = data?.firstName + ' ' + data?.lastName;

  if (isLoading) {
    return <AppLoadingScreen />;
  }

  return (
    <View style={styles.cardSettingsContainer}>
      <TitleText text={cardInformationTitle} subtitle={true} />
      <CardSettingsItem
        title={cardNumberTitle}
        content={formatedCardNumber(cardNumber!)}
        iconName={cardNumberIconName}
      />
      <CardSettingsItem title={cardHolderTitle} content={cardHolderConter} />
      <View style={styles.itemsContainer}>
        <CardSettingsItem
          title={cardExpirationTitle}
          content={formatDate(new Date(expirationDate!))}
          style={styles.itemWidth}
        />
        <CardSettingsItem
          title={securityCodeTitle}
          content={securityCode}
          style={styles.itemWidth}
        />
      </View>
    </View>
  );
};

export default CardSettingsContent;
