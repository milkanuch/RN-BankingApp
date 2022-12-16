import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  button: {
    height: responsiveHeight(7),
    backgroundColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteButton: {
    backgroundColor: COLORS.white,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    color: COLORS.white,
    fontSize: 14,
  },
  whiteButtonText: {
    color: COLORS.black,
  },
  underlayContainer: {
    borderRadius: 12,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
