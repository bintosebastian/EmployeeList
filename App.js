import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createSwitchNavigator } from 'react-navigation';
import EmployeeListHome from './EmployeeList/Main';
import HomeScreen from './HomeScreen'
import AboutScreen from './AboutScreen'

export default class App extends React.Component {
  render() {
    return (
      <MyApp style={styles.container} />
    );
  }
}

const MyApp = createDrawerNavigator({
    Home:{
      screen:HomeScreen,
    },
    EmployeeList:{
      screen:EmployeeListHome
    },
    About:{
      screen:AboutScreen
    },
});

const styles = StyleSheet.create({
  container: {
    marginTop:22
  },
});
