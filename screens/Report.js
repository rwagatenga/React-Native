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
		 Keyboard
		} from 'react-native';

export class Report extends Component {
	static navigationOptions = {
          title: 'Receipt',
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
      LoginFunction = () =>
      {

      }
  render() {
    return (
      <View style = {styles.mainContainer}>
       <Image style = {{width:80, height:83}} source = {require('./../images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }> Make a Recept </Text>
          </View>
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'FullNames'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          onSubmitEditing = {() => this.account.focus()}
          onChangeText = {InputEmail => this.setState({InputNames})}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Account No'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          ref = {(input) => this.account = input}
          onSubmitEditing = {() => this.size.focus()}
          onChangeText = {InputEmail => this.setState({InputAccount})}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'M3'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          ref = {(input) => this.price = input}
          onSubmitEditing = {() => this.pice.focus()}
          onChangeText = {InputEmail => this.setState({InputSize})}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Price'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          ref = {(input) => this.price = input}
          onSubmitEditing = {() => this.password.focus()}
          onChangeText = {InputEmail => this.setState({InputAccount})}
          />
          <TouchableOpacity style = {styles.button} onPress = {this.LoginFunction.bind(this)}>
          <Text style = {styles.buttonText}>SignUp</Text>
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