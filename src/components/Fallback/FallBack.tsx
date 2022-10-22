import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';

import { resetErrorButtonTitle } from './fallBack.settings';

import styles from './fallBack.styles';
import { IFallBackProps } from './fallBack.types';

export const Fallback: FC<IFallBackProps> = ({ error, resetError }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Oops!</Text>
    <Text style={styles.subtitle}>There's an error</Text>
    <Text style={styles.error}>{error.toString()}</Text>
    <CustomButton title={resetErrorButtonTitle} onPress={resetError} />
  </SafeAreaView>
);
