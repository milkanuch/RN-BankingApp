import { Text, TextInput, View } from 'react-native';

import { FC, useState } from 'react';

import { colors } from '../../constants/colors';

import IconButton from '../IconButton/IconButton';

import { ICustomTextInputProps } from './customTextInput.types';

import styles from './customTextInput.styles';
import { iconName, iconSize } from './customTextInput.settings';

const CustomTextInput: FC<ICustomTextInputProps> = ({
  title,
  hintText,
  secureTextEntry,
  value,
  setValue,
  style,
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleResetText = () => setValue('');

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.textInputContainer, focused && styles.focused]}>
        {!!hintText && <Text style={styles.hintText}>{hintText}</Text>}
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
          selectionColor={colors.black}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {!!value.length && (
          <IconButton
            iconName={iconName}
            size={iconSize}
            onPress={handleResetText}
          />
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
