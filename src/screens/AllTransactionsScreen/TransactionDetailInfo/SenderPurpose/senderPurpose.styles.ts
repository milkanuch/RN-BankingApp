import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { E_UKRAINE_BOLD, E_UKRAINE_THIN } from 'constants/fonts';

const styles = StyleSheet.create({
  senderPurposeContainer: {
    flex: 1,
  },
  senderPurposeTitle: {
    fontFamily: E_UKRAINE_BOLD,
    fontSize: 20,
    color: COLORS.black,
  },
  senderPurposeText: {
    padding: 10,
    backgroundColor: COLORS.light.primary[400],
    borderRadius: 6,
    fontFamily: E_UKRAINE_THIN,
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'justify',
  },
});

export default styles;
