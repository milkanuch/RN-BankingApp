import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';
import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(14),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 13,
    color: COLORS.black,
  },
});

export default styles;
