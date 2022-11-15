import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight, width } from '../../constants/dimensions';

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
  buttonContainer: {
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: width - 40,
  },
});

export default styles;
