import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPadding: {
    paddingRight: 15,
  },
  dateFont: {
    fontSize: 10,
    fontFamily: 'e-Ukraine-Light',
  },
  congratulations: {
    color: colors.darkGrey,
    fontFamily: 'e-Ukraine-Light',
  },
});

export default styles;
