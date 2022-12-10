import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';
import { responsiveHeight, responsiveWidth } from 'constants/dimensions';
import { eUkraineRegular } from 'constants/fonts';

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
    backgroundColor: colors.grey,
  },
  text: {
    fontFamily: eUkraineRegular,
    fontSize: 14,
    color: colors.grey,
  },
});

export default styles;
