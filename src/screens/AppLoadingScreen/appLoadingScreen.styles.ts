import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light.primary[200],
  },
  loader: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 10,
    elevation: 70,
  },
  dark: {
    shadowColor: colors.black,
    borderColor: colors.black,
  },
  light: {
    backgroundColor: colors.black,
    shadowColor: colors.white,
    borderColor: colors.white,
  },
});

export default styles;
