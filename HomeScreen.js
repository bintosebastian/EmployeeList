import React, { Component } from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import {Icon,Button,Container,Header,Content,Left, Right} from 'native-base'

class  HomeScreen extends Component{
    render() {
      return (
        <Container >
          <Header>
              <Left>
                  <Icon name ="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
              </Left>
          </Header>
          <Content>
              <Text style={styles.title}>Home</Text>
              <Image style={styles.image} source={require('./assets/Home.png')}/>
              
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
      borderColor:'#456990',
      borderBottomWidth:1,
      alignSelf:'center'
    },
    text:{
      margin:10,
    },
    image:{
      alignSelf:'center',
      width:'100%'
    }
  });
export default HomeScreen;
