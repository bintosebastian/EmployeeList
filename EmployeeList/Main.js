import React, { Component } from 'react'
import {  FlatList, ActivityIndicator,AppRegistry,TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native'
import { createStackNavigator,DrawerNavigator } from 'react-navigation';
import {Icon,Header,Content,Left} from 'native-base'
import EmployeeList from './ListView';
import EmployeeView from './EmployeeView';
import AddNewEmployee from './AddNewEmployee';

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

    unsetEmployeeID = (employeeID)=>{
      this.setState({
        currentEmployeeID: null,
      });
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
              <EmployeeView employee = {this.getCurrentEmployee()} empid={this.state.currentEmployeeID} onGoBackPress={this.unsetEmployeeID} />
            </View>
          )
        }
        if(this.state.employeeList.length > 0){
          return(
            <View style={styles.empHome}>
              <Header>
                  <Left>
                      <Icon name ="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
                  </Left>
              </Header>
              <Text style={styles.title}>Employees List</Text>
              <Button
                title="Add New Employee"
                onPress={() => this.props.navigation.navigate('AddNew')}
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

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details</Text>
        
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
    AddNew: {
      screen: AddNewEmployee,
    },
  },{
    initialRouteName : 'Home'
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