import { StyleSheet } from 'react-native';

import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
