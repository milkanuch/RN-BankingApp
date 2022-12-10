/**
 * @format
 */

import { AppRegistry } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Provider } from 'react-redux';

import { Fallback } from 'components/Fallback/FallBack';

import { store } from 'store/index';

import App from './App';
import { name as appName } from './app.json';

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
