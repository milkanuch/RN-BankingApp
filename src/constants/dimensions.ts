import { Dimensions, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('window');

const screenHeight = Dimensions.get('screen').height;

const statusBarHeight = StatusBar.currentHeight ?? 0;

const сorrectHeight =
  height - statusBarHeight + Math.abs(screenHeight - height) - 48;

const responsiveWidth = (value: number): number => {
  return width * (value / 100);
};

const responsiveHeight = (value: number): number => {
  return сorrectHeight * (value / 100);
};

export { height, width, сorrectHeight, responsiveHeight, responsiveWidth };
