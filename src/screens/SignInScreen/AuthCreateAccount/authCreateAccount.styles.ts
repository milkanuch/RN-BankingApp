import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';
import { responsiveHeight } from '../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(14),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'e-Ukraine-Regular',
    fontSize: 13,
    color: colors.black,
  },
});

export default styles;
