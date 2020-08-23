/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/Navigation';
import store from './src/services/redux/store';

const App = () => (
  <View style={styles.mainContainer}>
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  </View>
);

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
