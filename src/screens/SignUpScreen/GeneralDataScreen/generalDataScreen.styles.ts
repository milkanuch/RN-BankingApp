import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';
import { responsiveHeight } from '../../../constants/dimensions';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  header: {
    height: responsiveHeight(13),
    paddingVertical: responsiveHeight(1),
  },
});

export default styles;
