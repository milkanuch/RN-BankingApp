import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';

const size = 12;

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: colors.grey,
  },
  selected: {
    backgroundColor: colors.black,
  },
});

export default styles;
