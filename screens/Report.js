//Report.js

import React, { Component } from 'react';
import { AppRegistry,
		 StyleSheet, 
		 Text, 
		 View, 
		 Image, 
		 TouchableOpacity, 
		 TextInput, 
		 Alert, 
		 Keyboard,
     BackHandler,
     BackAndroid,
     AsyncStorage
		} from 'react-native';
    import {decode as atob, encode as btoa} from 'base-64'
export class Report extends Component {


 LogoutFunction = () => {

        fetch('http://192.168.1.199:8000/api/v1/logout', {
            method: "POST", 
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                'Authorization': 'UTg0Y0NENE01OXZEdkFtckNmM0lFdzJJWjdoVUVBZmc3Y25Kc1hNNVJ0Z0liNFdlVlZMZkZPeVl5M0ls5b8d1235e4bd2'
            },
            // body: JSON.stringify({
            //   access_token: STORAGE_KEY
            // })
        })
        .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson.message);
      this.props.navigation.navigate('LoginScreen');
    }).catch((error) => {
      console.error(error);
    });
}
MakeFunction = () => {
    this.props.navigation.navigate('MakesScreen');
  }
	static navigationOptions = {
          title: 'Receipt',
           headerLeft: null,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#000000',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };
  render() {
    //const {navigate} = this.props.navigation;
    return (
      <View style = {styles.mainContainer}>
       <Image style = {{width:80, height:83}} source = {require('./../images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }> Make a Recept </Text>
          </View>
          <TouchableOpacity style = {styles.button} onPress = { this.MakeFunction }>
          <Text style = {styles.buttonText}>Make a Recept</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = {this.LogoutFunction.bind(this)}>
          <Text style = {styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          <Text></Text>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#ffffff',
    margin: 7,
  },
  TextStyle:
 {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
 },
 buttonTouch:
 {
    width: 210,
    height: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#000000',
    margin: 10,
 },
 buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  inputBox: {
    width: 280,
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 16,
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#000000',
    marginVertical: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },
  button: {
    width: 150,
    backgroundColor: '#000000',
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 8,
  },
  question: {
    marginVertical: 10,
  },
});


export default Report;