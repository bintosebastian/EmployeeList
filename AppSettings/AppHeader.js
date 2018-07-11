import React, { Component } from 'react'
import { View,Text,StyleSheet, } from 'react-native'
import {Icon,Button,Container,Header,Content,Left} from 'native-base'

class  AppHeader extends Component{
    render() {
      return (
            <Header>
                <Left>
                    <Icon name ="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
            </Header>
      )
    }
}


const styles = StyleSheet.create({
    title:{
      color:'#114B5F',
      fontSize: 25,
      borderBottomWidth:2,
      borderColor:'#456990',
    },
  });
export default AppHeader;
