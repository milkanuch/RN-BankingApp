import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light.primary[200],
  },
  loader: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 10,
    elevation: 70,
  },
  dark: {
    shadowColor: COLORS.black,
    borderColor: COLORS.black,
  },
  light: {
    backgroundColor: COLORS.black,
    shadowColor: COLORS.white,
    borderColor: COLORS.white,
  },
});

export default styles;
