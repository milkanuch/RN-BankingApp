import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  checkBoxBorder: {
    borderRadius: 4,
    borderColor: COLORS.black,
  },
  fillContainer: {
    borderRadius: 4,
  },
  icon: {
    width: 15,
    height: 15,
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 13,
    color: COLORS.black,
    textDecorationLine: 'none',
  },
});

export default styles;
