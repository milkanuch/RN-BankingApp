import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

import { eUkraineRegular } from './../../constants/fonts';

const styles = StyleSheet.create({
  checkBoxBorder: {
    borderRadius: 4,
    borderColor: colors.black,
  },
  fillContainer: {
    borderRadius: 4,
  },
  icon: {
    width: 15,
    height: 15,
  },
  text: {
    fontFamily: eUkraineRegular,
    fontSize: 13,
    color: colors.black,
    textDecorationLine: 'none',
  },
});

export default styles;
