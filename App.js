import React from 'react';
import { View, Text } from 'react-native';
import {Header} from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}
