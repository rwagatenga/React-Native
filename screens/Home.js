//Home.js

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
		 ImageBackground
		} from 'react-native';

export class Home extends Component {
	static navigationOptions = {
          title: 'Welcome',
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
      Login = () =>
   {
    this.props.navigation.navigate('LoginScreen');
   }
  render() {
    return (
      <View style = {styles.mainContainer}>
      <ImageBackground source={require('../images/3.jpg')} style={{width: '100%', height: '100%', }}>
       <Image style = {{width:80, height:83}} source = {require('./../images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }>Welcome to AYATEKE Star</Text>
          </View>
          <TouchableOpacity style = {styles.buttonTouch} onPress = { this.Login }>
          <Text style = {styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text>Hello Word</Text>
       </View>
    )
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
    width: 180,
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#000000',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70,
    
 },
 buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  inputBox: {
    width: 350,
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
    width: 200,
    backgroundColor: '#000000',
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 12,
  },
  question: {
    marginVertical: 10,
  },
});


export default Home;