import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: 'e-Ukraine-Thin',
    fontSize: 13,
    color: colors.white,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default styles;
