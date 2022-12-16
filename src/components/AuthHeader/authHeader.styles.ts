import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';
import { E_UKRAINE_LIGHT, E_UKRAINE_THIN } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  titleText: {
    fontFamily: E_UKRAINE_LIGHT,
    fontSize: 24,
    color: COLORS.black,
  },
  text: {
    fontFamily: E_UKRAINE_THIN,
    fontSize: 13,
    color: COLORS.black,
    paddingVertical: responsiveHeight(1),
  },
});

export default styles;
