import { View, Text } from 'react-native';
import React, { FC } from 'react';

import IconFeather from 'react-native-vector-icons/Feather';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { copyTextToClipboard, showSnackBar } from 'components/Card/card.helper';

import { COLORS } from 'constants/colors';

import { ICardSettingsItemProps } from './CardSettingsItem.type';

import styles from './CardSettingsItem.styles';
import { copiedCardMessage, iconSize } from './CardSettingsItemsettings';

const CardSettingsItem: FC<ICardSettingsItemProps> = ({
  title,
  content,
  iconName,
  style,
}) => {
  const handleCopyCardNumber = () => {
    copyTextToClipboard(content!);
    showSnackBar(copiedCardMessage);
  };

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapper}>
        <Text style={styles.contentText}>{content}</Text>
        {iconName && (
          <TouchableOpacity onPress={handleCopyCardNumber}>
            <IconFeather name={iconName} size={iconSize} color={COLORS.black} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CardSettingsItem;
