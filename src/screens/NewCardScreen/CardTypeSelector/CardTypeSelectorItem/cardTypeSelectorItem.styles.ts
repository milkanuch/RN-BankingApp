import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { responsiveWidth } from 'constants/dimensions';
import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(50) - 40,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: COLORS.black,
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 16,
    color: COLORS.black,
  },
  selectedText: {
    color: COLORS.white,
  },
});

export default styles;
