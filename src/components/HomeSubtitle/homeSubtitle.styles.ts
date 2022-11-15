import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.darkGrey,
    fontFamily: 'e-Ukraine-Light',
    fontSize: 18,
    marginTop: 10,
  },
  buttonTitle: {
    fontFamily: 'e-Ukraine-Light',
  },
});

export default styles;
