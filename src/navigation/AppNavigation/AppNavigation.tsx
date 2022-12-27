import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthStackNavigation from 'navigation/AuthStackNavigation/AuthStackNavigation';

import { selectIsLogged } from 'store/user/userSlice';

import { useAppSelector } from 'store/index';

import AppStackNavigation from 'navigation/AppStackNavigation/AppStackNavigation';

import { appTheme } from './appNavigation.settings';

const AppNavigation = () => {
  const isLogged = useAppSelector(selectIsLogged);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={appTheme}>
        {isLogged ? <AppStackNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
