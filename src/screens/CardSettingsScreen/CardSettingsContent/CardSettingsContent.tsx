import { View } from 'react-native';
import React, { FC } from 'react';

import CardSettingsItem from '../CardSettingsItem/CardSettingsItem';
import TitleText from '../../../components/TitleText/TitleText';

import {
  formatDate,
  formatedCardNumber,
} from '../../../components/Card/CardFooter/cardFooter.helper';

import styles from './cardSettingsContent.styles';
import {
  cardExpirationTitle,
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
  return (
    <View style={styles.cardSettingsContainer}>
      <TitleText text="Card Information" subtitle={true} />
      <CardSettingsItem
        title={cardNumberTitle}
        content={formatedCardNumber(cardNumber!)}
        iconName={cardNumberIconName}
      />
      <CardSettingsItem title="Card Holder" content="Dorian Gray" />
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
