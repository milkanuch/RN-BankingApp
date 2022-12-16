import { FC } from 'react';
import { View } from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { COLORS } from 'constants/colors';

import styles from './checkBox.styles';

import { ICheckBoxProps } from './checkBox.types';

const CheckBox: FC<ICheckBoxProps> = ({
  text,
  isChecked,
  onPress,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      <BouncyCheckbox
        innerIconStyle={styles.checkBoxBorder}
        iconStyle={styles.fillContainer}
        iconImageStyle={styles.icon}
        fillColor={COLORS.black}
        text={text}
        textStyle={styles.text}
        isChecked={isChecked}
        onPress={onPress}
      />
    </View>
  );
};

export default CheckBox;
