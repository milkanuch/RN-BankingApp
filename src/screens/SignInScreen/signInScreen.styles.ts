import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  checkBox: {
    height: responsiveHeight(6),
  },
  header: {
    height: responsiveHeight(20),
  },
  error: {
    borderColor: colors.red,
  },
});

export default styles;
