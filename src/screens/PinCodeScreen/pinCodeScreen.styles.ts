import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkGrey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(4),
  },
});

export default styles;
