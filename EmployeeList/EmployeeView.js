import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import ajax from '../Ajax.js'

class EmployeeView extends React.Component{
  static propTypes ={
    employee : PropTypes.object.isRequired,
    empid : PropTypes.number.isRequired,
    onGoBackPress : PropTypes.func.isRequired,
  }
  state ={
    employeeDetails  : {},
    employeeID :this.props.empid,
  } 
  async componentDidMount(){
    const employee = await ajax.fetchEmployeDetalis(this.state.employeeID);
      this.setState({
        employeeDetails:employee[0]
      })
    }

  goBack(){
      this.props.onGoBackPress();
  } 

  render(){
    const {employeeDetails} =this.state;
    const employeeID = this.state;
      return(
        <View style={styles.tile}> 
          <Text style={styles.name}>{employeeDetails.employee_id}: {employeeDetails.first_name} {employeeDetails.last_name}</Text>
          <Text style={styles.place}>{employeeDetails.place}</Text>
          <Text style={styles.designation}>{this.state.employeeID}{employeeDetails.first_name}</Text>  
          <TouchableOpacity onPress={()=> this.goBack() } >
            <Text>Back</Text>
          </TouchableOpacity>  
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
      fontSize: 20,
    },
    place: {
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