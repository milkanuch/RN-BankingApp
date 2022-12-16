import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight, responsiveWidth } from 'constants/dimensions';
import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(7),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    height: 1,
    width: responsiveWidth(35),
    backgroundColor: COLORS.grey,
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 14,
    color: COLORS.grey,
  },
});

export default styles;
