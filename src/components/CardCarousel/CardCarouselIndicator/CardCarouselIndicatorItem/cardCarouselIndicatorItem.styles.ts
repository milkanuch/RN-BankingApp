import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

const size = 12;

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: COLORS.grey,
  },
  selected: {
    backgroundColor: COLORS.black,
  },
});

export default styles;
