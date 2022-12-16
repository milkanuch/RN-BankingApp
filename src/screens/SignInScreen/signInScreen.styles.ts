import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  checkBox: {
    height: responsiveHeight(6),
  },
  header: {
    height: responsiveHeight(20),
  },
  error: {
    borderColor: COLORS.red,
  },
});

export default styles;
