import React, { Component } from 'react'
import { View,Text,StyleSheet, } from 'react-native'
import {Icon,Button,Container,Header,Content,Left} from 'native-base'
import { createBottomTabNavigator } from 'react-navigation';
import AboutMainScreen from './AppSettings/AboutMainScreen'
import ProfileScreen from './AppSettings/ProfileScreen'
import SettingsScreen from './AppSettings/SettingsScreen'
import ContactScreen from './AppSettings/ContactScreen'


class  AboutScreen extends Component{
    render() {
      return (
        
        <Container >
            <Header>
                <Left>
                    <Icon name ="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
            </Header>
             <AboutView/>
        </Container>
      )
    }
}

const AboutView = createBottomTabNavigator({
    Home:{
        screen:AboutMainScreen,
    },
    Profile:{
      screen:ProfileScreen,
    },
    Settings:{
      screen:SettingsScreen
    },
    Contact:{
      screen:ContactScreen
    },
});

const styles = StyleSheet.create({
    container:{
        paddingTop:22
    }
  });

export default AboutScreen;
