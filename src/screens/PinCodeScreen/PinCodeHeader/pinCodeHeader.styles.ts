import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  header_text: {
    color: COLORS.white,
    fontSize: 36,
  },
  header: {
    marginTop: responsiveHeight(6),
  },
});

export default styles;
