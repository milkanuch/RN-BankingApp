import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: 'e-Ukraine-Thin',
    fontSize: 27,
    color: colors.white,
  },
});

export default styles;