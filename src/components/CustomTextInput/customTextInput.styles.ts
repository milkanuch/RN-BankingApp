import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight } from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(13),
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
    backgroundColor: colors.light.primary[200],
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.light.primary[200],
  },
  focused: {
    borderColor: colors.black,
  },
  title: {
    color: colors.black,
    fontSize: 14,
    marginBottom: 6,
  },
  hintText: {
    color: colors.grey,
    fontSize: 13,
    marginRight: 10,
  },
});

export default styles;
