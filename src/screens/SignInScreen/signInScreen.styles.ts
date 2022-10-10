import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight } from '../../constants/dimensions';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  checkBox: {
    height: responsiveHeight(6),
  },
});

export default styles;
