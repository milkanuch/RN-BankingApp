import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../../constants/dimensions';

const containerWidth = responsiveWidth(50) - 40;
const containerHeight = responsiveHeight(15);

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    height: containerHeight,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 16,
    borderColor: colors.black,
    borderWidth: 2,
    color: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: colors.black,
  },
  text: {
    color: colors.black,
    fontFamily: 'e-Ukraine-Regular',
    fontSize: 20,
  },
  selectedText: {
    color: colors.white,
  },
});

export default styles;
