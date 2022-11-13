import { View } from 'react-native';
import React, { FC } from 'react';

import CustomButton from '../../../components/CustomButton/CustomButton';

import styles from './createCardButton.styles';

import { ICreateCardButtonProps } from './createCardButton.types';

const CreateCardButton: FC<ICreateCardButtonProps> = props => {
  return (
    <View style={styles.container}>
      <CustomButton {...props} />
    </View>
  );
};

export default CreateCardButton;
