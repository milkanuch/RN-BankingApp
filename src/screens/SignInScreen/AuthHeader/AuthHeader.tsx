import { View, Text } from 'react-native';

import styles from './authHeader.styles';

const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In</Text>
      <Text style={styles.text}>
        Please enter the required login information.
      </Text>
    </View>
  );
};

export default AuthHeader;
