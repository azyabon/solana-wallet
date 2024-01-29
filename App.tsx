import React from 'react';
import Layout from './src/shared/Layout/Layout';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SheetProvider} from 'react-native-actions-sheet';
import {Provider} from 'react-redux';
import {store} from './src/reducers';

import './src/sheets/registry';
global.Buffer = require('buffer').Buffer;
import 'react-native-get-random-values';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SheetProvider>
          <Layout />
        </SheetProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
