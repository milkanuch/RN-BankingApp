import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight, responsiveWidth } from 'constants/dimensions';
import { E_UKRAINE_REGULAR } from 'constants/fonts';

const containerWidth = responsiveWidth(50) - 40;
const containerHeight = responsiveHeight(15);

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    height: containerHeight,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 16,
    borderColor: COLORS.black,
    borderWidth: 2,
    color: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: COLORS.black,
  },
  text: {
    color: COLORS.black,
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 20,
  },
  selectedText: {
    color: COLORS.white,
  },
});

export default styles;
