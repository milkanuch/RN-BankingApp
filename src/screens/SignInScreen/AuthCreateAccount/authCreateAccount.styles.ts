import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';
import { eUkraineRegular } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(14),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontFamily: eUkraineRegular,
    fontSize: 13,
    color: colors.black,
  },
});

export default styles;
