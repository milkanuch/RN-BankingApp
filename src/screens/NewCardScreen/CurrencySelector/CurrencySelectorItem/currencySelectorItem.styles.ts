import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { responsiveWidth } from 'constants/dimensions';
import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(33) - 40,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 16,
    borderColor: COLORS.black,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: COLORS.black,
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    color: COLORS.black,
  },
  selectedText: {
    color: COLORS.white,
  },
});

export default styles;
