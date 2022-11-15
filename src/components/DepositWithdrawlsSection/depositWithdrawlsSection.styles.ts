import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight } from '../../constants/dimensions';

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
    minHeight: responsiveHeight(15),
  },
  text: {
    fontWeight: '100',
    fontSize: 18,
    paddingBottom: 10,
    alignSelf: 'baseline',
    color: colors.darkGrey,
    fontFamily: 'e-Ukraine-Light',
  },
  container: {
    elevation: 10,
    padding: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});

export default styles;
