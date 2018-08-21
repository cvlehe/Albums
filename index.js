// Import a library to create a component
import React from 'react';
import { ReactNative, Text } from 'react-native';

// Create a component
const App = () => (
  <Text>Some Text</Text>
);

// Render it to device
ReactNative.AppRegistry.registerComponent('albums', () => App);
