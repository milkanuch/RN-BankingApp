import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  frequentlyButton: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: colors.darkGrey,
    marginBottom: 5,
  },
  center: {
    alignItems: 'center',
  },
});

export default styles;
