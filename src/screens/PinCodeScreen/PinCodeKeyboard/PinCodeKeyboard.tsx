import React, { FC } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import PinCodeButton from '../PinCodeButton/PinCodeButton';
import { IPinCodeButtonProps } from '../PinCodeButton/pinCodeButton.types';

import styles from './pinCodeKeyboard.style';
import { IPinCodeKeyboardProps } from './pinCodeKeyboard.types';
import getDataList from './pinCodeKeyboard.settings';

const keyExtractor = (item: IPinCodeButtonProps, index: number) =>
  index.toString();

const renderItem: ListRenderItem<IPinCodeButtonProps> = ({ item }) => {
  return <PinCodeButton {...item} />;
};

export const PinCodeKeyboard: FC<IPinCodeKeyboardProps> = ({ functions }) => {
  return (
    <FlatList
      contentContainerStyle={styles.flatlist}
      data={getDataList(functions)}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={3}
    />
  );
};
