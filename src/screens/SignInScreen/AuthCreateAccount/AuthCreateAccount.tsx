import { Text, TouchableOpacity, View } from 'react-native';
import { FC } from 'react';

import { IAuthCreateAccountProps } from './authCreateAccount.types';
import styles from './authCreateAccount.styles';
import { activeOpacityValue } from './authCreateAccount.settings';

const AuthCreateAccount: FC<IAuthCreateAccountProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacityValue}>
        <Text style={styles.text}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthCreateAccount;
