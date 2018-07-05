import React, { Component } from 'react'
import {  FlatList, 
  ActivityIndicator,
  AppRegistry,
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet, 
  Button 
} from 'react-native'

import {
  createStackNavigator,
} from 'react-navigation';
const baseUrl='http://dotnet2.zerone-consulting.com/PythonRESTapi/api/';

class EmployeeView extends React.Component{
  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       employeeDetails : [],
    }
  }

    componentDidMount(){
        return fetch(baseUrl + 'employees/' + this.props.empid)
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              employeeDetails: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
      
    render(){
      const employee =this.props.employee;
      const empid=this.props.empid;
        return(
          <View style={styles.empView}>
            <Text style={styles.title}>Employees {this.state.employeeDetails.first_name} {empid}</Text>            
          </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
      marginBottom:20,
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'space-between'
    },
    title: {
      color:'#114B5F',
      fontSize: 25,
      borderBottomWidth:2,
      borderColor:'#456990',
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
  
export default EmployeeView;