import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomNavigation from 'navigation/BottomNavigation';

import AuthStackNavigation from 'navigation/AuthStackNavigation/AuthStackNavigation';

import { selectIsLogged } from 'store/user/userSlice';

import { useAppSelector } from 'store/index';

import { appTheme } from './appNavigation.settings';

const AppNavigation = () => {
  const isLogged = useAppSelector(selectIsLogged);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={appTheme}>
        {isLogged ? <BottomNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
