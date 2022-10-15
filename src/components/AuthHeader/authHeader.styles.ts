import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight } from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  titleText: {
    fontFamily: 'e-Ukraine-Light',
    fontSize: 24,
    color: colors.black,
  },
  text: {
    fontFamily: 'e-Ukraine-Thin',
    fontSize: 13,
    color: colors.black,
    paddingVertical: responsiveHeight(1),
  },
});

export default styles;
