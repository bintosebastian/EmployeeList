import React, { Component } from 'react'
import {  FlatList, ActivityIndicator,AppRegistry,TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native'
import {
  createStackNavigator,
} from 'react-navigation';
import EmployeeList from './ListView';
import EmployeeView from './EmployeeView';
const baseUrl='http://dotnet2.zerone-consulting.com/PythonRESTapi/api/';


class EmployeeListView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           isLoading: true,
           employeeList : [],
        currentEmployeeID : null
        }
      }

    componentDidMount(){
        return fetch(baseUrl + 'employees')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              employeeList: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
      
    setEmployeeID = (employeeID)=>{
      this.setState({
        currentEmployeeID: employeeID,
      });
    }

    getCurrentEmployee =() => {
      return this.state.employeeList.find(
        (employee) => employee.employee_id === this.state.currentEmployeeID
      )
    }

    render(){
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
          }
        if (this.state.currentEmployeeID) {
          return(
            <View style={styles.empHome}>
              <EmployeeView employee = {this.getCurrentEmployee} empid={this.state.currentEmployeeID} />
            </View>
          )
        }
        if(this.state.employeeList.length > 0){
          return(
            <View style={styles.empHome}>
              <Text style={styles.title}>Employees List</Text>
              <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details')}
              />
              <EmployeeList employeeList = {this.state.employeeList} onItemPress={this.setEmployeeID} />
            </View>
          );
        }
        return(
          <Text>No Data..</Text>
        )
    }
}

class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       employeeDetails : {},
    }
  }

  componentDidMount(){
    return fetch(baseUrl + 'employees/1')
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
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
        {/* <Text>{this.props.employeeDetails.employee_id}: {this.props.employeeDetails.first_name} {this.props.employeeDetails.last_name}</Text> */}
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const EmployeeListHome = createStackNavigator({
    Home: {
      screen: EmployeeListView,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);


const styles = StyleSheet.create({
  empHome:{
      flex:1,
      margin:10
    },
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
  });
  
export default EmployeeListHome;