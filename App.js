import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EmployeeListHome from './EmployeeList/Main';

export default class App extends React.Component {
  render() {
    return (
        <EmployeeListHome style={styles.container}/>
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
