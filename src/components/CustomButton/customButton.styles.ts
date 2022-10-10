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
    color: colors.white,
    fontSize: 15,
  },
  whiteButtonText: {
    color: colors.black,
  },
  underlayContainer: {
    borderRadius: 12,
  },
});

export default styles;
