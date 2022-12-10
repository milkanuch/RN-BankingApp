import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  textInputContainer: {
    marginHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
