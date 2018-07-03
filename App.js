import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EmployeeList from './EmployeeList/List';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EmployeeList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4FDE1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
