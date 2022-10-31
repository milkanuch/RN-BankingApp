import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';
import { responsiveHeight } from '../../../constants/dimensions';

const styles = StyleSheet.create({
  header_text: {
    color: colors.white,
    fontSize: 36,
  },
  header: {
    marginTop: responsiveHeight(6),
  },
});

export default styles;
