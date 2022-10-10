import { Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const responsiveWidth = (value: number): number => {
  return width * (value / 100);
};

export const responsiveHeight = (value: number): number => {
  return height * (value / 100);
};
