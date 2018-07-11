import React, { Component } from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import {Icon,Container,Header,Content,Left,Button} from 'native-base'

export default class AddNewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={styles.employeAddView} >
        <Text style={styles.title} > Add New Employee</Text>
        <View style={styles.form} >
            <TextInput style={styles.textbox}
                placeholder="First Name"
                onChangeText={(fname) => this.setState({fname})}/>

            <TextInput  style={styles.textbox}
                placeholder="Last Name"
                onChangeText={(lname) => this.setState({lname})}/>

            <TextInput  style={styles.textbox}
                placeholder="Place"
                onChangeText={(place) => this.setState({place})}/>

            <TextInput  style={styles.textbox}
                placeholder="Designation"
                onChangeText={(designation) => this.setState({designation})}/>

              <Button  style={styles.button} title="Register" onPress={this.validateRegister} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    employeAddView:{
      alignItems:'center',
    },
    title:{
      color:'#114B5F',
      fontSize: 25,
      borderBottomWidth:2,
      borderColor:'#456990',
    },
    form:{
      width:'80%'
    },
    textbox:{
      height:60,
      width:'100%',
      color:'#1fa091'
    },
    button:{
      width:150,
      height:50,
      backgroundColor:'#1fa091'
    }
  });
