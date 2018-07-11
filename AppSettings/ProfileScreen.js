import React, { Component } from 'react'
import { View,Text,StyleSheet, } from 'react-native'
import {Icon,Button,Container,Header,Content,Left} from 'native-base'

class  ProfileScreen extends Component{
    render() {
      return (
        <Container >
          <Content>
              <Text style={styles.title}>Profile</Text>
              <Text style={styles.text}>Navigation is all about organizing your content. If you want to be able to switch around between a few different unrelated sections of your app, tabs might be a good option. If your app needs to follow a specific sequence of events (i.e. a user must log in and THEN they can send a message), you’re probably looking at a stack. The React Navigation library makes it possible to wire up complex routing and layouts. In this post, we’ll explore the different types of navigation available to us and make a simple app that combines all of them.</Text>
          </Content>
        </Container>
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
export default ProfileScreen;