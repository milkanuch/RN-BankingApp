import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  header: {
    height: responsiveHeight(10),
    paddingVertical: responsiveHeight(1),
  },
});

export default styles;
