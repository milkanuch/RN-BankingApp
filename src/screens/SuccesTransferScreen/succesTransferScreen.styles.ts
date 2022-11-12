import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight } from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
    color: colors.white,
  },
  text: {
    fontFamily: 'e-Ukraine-Regular',
    fontSize: responsiveHeight(2.5),
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
