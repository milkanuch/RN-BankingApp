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
  placeHolder,
  secureTextEntry,
  value,
  validation,
  errorText,
  setValue,
  style,
}) => {
  const [focused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleResetText = () => setValue('');

  const handleTextValidation = (newValue: string) => {
    if (validation) {
      setIsValid(validation(newValue));
    }
    setValue(newValue);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.textInputContainer,
          focused && styles.focused,
          !isValid && styles.error,
        ]}>
        {!!hintText && <Text style={styles.hintText}>{hintText}</Text>}
        <TextInput
          value={value}
          placeholder={placeHolder}
          onChangeText={handleTextValidation}
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
      {!isValid && (
        <Text style={styles.errorText} adjustsFontSizeToFit numberOfLines={1}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
