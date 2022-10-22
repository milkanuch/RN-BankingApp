/**
 * @format
 */

import { AppRegistry } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Provider } from 'react-redux';

import App from './App';
import { name as appName } from './app.json';
import { Fallback } from './src/components/Fallback/FallBack';
import { store } from './src/store';

const Root = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  );
};

AppRegistry.registerComponent(appName, () => Root);
