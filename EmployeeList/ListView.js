import React, { Component } from 'react'
import {  FlatList, ActivityIndicator,AppRegistry,TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native'
import PropTypes from 'prop-types'
import {
  createStackNavigator,
} from 'react-navigation';

class EmployeeList extends React.Component{
  
  static propTypes ={
    onItemPress : PropTypes.func.isRequired,
  }
  handlePress = (id) => {
    this.props.onItemPress(id);
  }

  render(){
    return(
      <View style={styles.empList}>
        <FlatList 
          data={this.props.employeeList}
          renderItem={({item}) =>
          <TouchableOpacity onPress={()=> this.handlePress(item.employee_id) } style={styles.tile}>
              <Text style={styles.name}>{item.employee_id}: {item.first_name} {item.last_name}</Text>
              <Text style={styles.place}>{item.place}</Text>
              <Text style={styles.designation}>{item.designation}</Text>
              </TouchableOpacity>
            }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    empList:{
      flex:1,
      width:'100%',
    },
    tile:{
      borderWidth:2,
      borderColor:'#456990',
      borderRadius:5,
      margin:3,
      padding:5,
    },
    name: {
      color:'#F45B69',
      flex: 1,
      fontSize: 20,
    },
    place: {
      color:'#028090',
      flex: 1,
      fontSize: 15,
    },
    buttons:{
      alignSelf:'flex-end',
      width:150,
      alignItems:'flex-start',
      flexDirection:'row-reverse',
      justifyContent:'space-around',
      paddingTop:15,
      paddingBottom:5
    },  
    delete: {
      alignSelf:'flex-end',
      backgroundColor:'#841584' 
    },
    editbutton: {
      alignSelf:'flex-end',
      color:'#841584' 
    },
    addButton: {
      width:10,
      alignSelf:'flex-end',
      backgroundColor:'#841584' 
    }
  });
  
export default EmployeeList;