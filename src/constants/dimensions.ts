import { Dimensions, StatusBar } from 'react-native';

export const { height, width } = Dimensions.get('window');

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight ?? 0;

export const CORRECT_HEIGHT =
  height - STATUS_BAR_HEIGHT + Math.abs(SCREEN_HEIGHT - height) - 48;

export const responsiveWidth = (value: number): number => {
  return width * (value / 100);
};

export const responsiveHeight = (value: number): number => {
  return CORRECT_HEIGHT * (value / 100);
};
