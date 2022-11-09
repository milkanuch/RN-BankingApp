import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight } from '../../constants/dimensions';

const styles = StyleSheet.create({
  button: {
    height: responsiveHeight(7),
    backgroundColor: colors.black,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteButton: {
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontFamily: 'e-Ukraine-Regular',
    color: colors.white,
    fontSize: 14,
  },
  whiteButtonText: {
    color: colors.black,
  },
  underlayContainer: {
    borderRadius: 12,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
