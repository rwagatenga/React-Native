import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Keyboard } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class App extends Component {

  static navigationOptions = {
          title: 'Home',
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
    this.props.navigation.navigate('Login');
   }
   Signup = () =>
   {
    this.props.navigation.navigate('Signup');
   }

 render()
 {
    return(

       <View style = {styles.mainContainer}>
       <Image style = {{width:80, height:83}} source = {require('./images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }> Welcome to My App </Text>
          </View>
          <TouchableOpacity style = {styles.buttonTouch} onPress = { this.Login }>
          <Text style = {styles.buttonText}>Login</Text>
          </TouchableOpacity>
           <TouchableOpacity style = {styles.buttonTouch} onPress = { this.Signup }>
          <Text style = {styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        <Text>Hello</Text>
       </View>
       );
  }
}

class Signin extends Component
{
  constructor(props){
  super(props);
  this.state = {
    InputEmail: '',
    InputPassword: '',
  }
}
LoginFunction = () => {
  const {InputEmail} = this.state;
  const {InputPassword} = this.state;

  fetch('http://192.168.1.247/Fred/login.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: InputEmail,
      password: InputPassword
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      if (responseJson == "Ok") {
        Alert.alert('Successfully Logged in');
        this.props.navigation.navigate("Welcome");
      }
      else{
        Alert.alert('Invalid E-mail or Password');
      }
    }).catch((error) => {
      console.error(error);
    });
    Keyboard.dismiss();
}
 static navigationOptions =
 {
    title: 'Login',
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
   Signup = () =>
   {
    this.props.navigation.navigate('Signup');
   }

 render()
 {
    return(
       <View style = { styles.mainContainer }>
       <Image style = {{width:80, height:83}} source = {require('./images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }> Welcome to My App </Text>
          </View>

          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'E-mail'
          selectionType = "#ffffff"
          keyboardType = "email-address"
          onSubmitEditing = {() => this.password.focus()}
          onChangeText = {InputEmail => this.setState({InputEmail})}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Password'
          secureTextEntry = {true}
          ref = {(input) => this.password = input}
          onChangeText = {InputPassword => this.setState({InputPassword})}
          
          />
          <TouchableOpacity style = {styles.button} onPress = {this.LoginFunction.bind(this)}>
          <Text style = {styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
          <View style = {styles.question}>
          <Text style = {{fontSize: 20, }}>Do not have an account?</Text>
          <TouchableOpacity onPress = { this.Signup }>
          <Text style = {{fontWeight: 'bold', fontSize: 17}}>Signup</Text>
          </TouchableOpacity>
          </View>
          <Text>Hello</Text>
       </View>
    );
 }
}

class Register extends Component
{
constructor(props){
  super(props);
  this.state = {
    InputName: '',
    InputEmail: '',
    InputPassword: '',
  }
}
SignupFunction = () => {
  const {InputName} = this.state;
  const {InputEmail} = this.state;
  const {InputPassword} = this.state;

  fetch('http://192.168.1.247/Fred/register.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: InputName,
      email: InputEmail,
      password: InputPassword,
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(responseJson);
    }).catch((error) => {
      console.error(error);
    });
    Keyboard.dismiss();
}
 static navigationOptions =
 {
    title: 'Register',
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
    this.props.navigation.navigate('Login');
   }

 render()
 {
    return(
       <View style = { styles.mainContainer }>
       <Image style = {{width:80, height:83}} source = {require('./images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }> Welcome to My App </Text>
          </View>

          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Names'
          onChangeText = {InputName => this.setState({InputName})}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'E-mail'
          selectionType = "#ffffff"
          keyBoardType = "email-address"
          onChangeText = {InputEmail => this.setState({InputEmail})}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Password'
          secureTextEntry = {true}
          onChangeText = {InputPassword => this.setState({InputPassword})}
          />
          <TouchableOpacity style = {styles.button} onPress = {this.SignupFunction.bind(this)}>
          <Text style = {styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
          <View style = {styles.question}>
          <Text style = {{fontSize: 20, }}>Already have an account?</Text>
          <TouchableOpacity onPress = { this.Login }>
          <Text style = {{fontWeight: 'bold', fontSize: 17}}>Signin</Text>
          </TouchableOpacity>
          <Text>Hello</Text>
          </View>

       </View>
    );
 }
}

class Welcome extends Component {
  static navigationOptions =
 {
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
 render(){
  return(
    <View style = {styles.mainContainer}>
    <Image style = {{width:80, height:83}} source = {require('./images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }> Welcome to My App </Text>
          </View>
          <Text>
          I Would Like To Thank you for you effort
          You have to keep moving Forward This is 
          My Simple App I have done
          </Text>
    </View>
    );
 }
}

export default Project = createStackNavigator(
{
 First: { screen: App },
 
 Login: {screen: Signin},

 Signup: {screen: Register},

 Welcome: {screen: Welcome},
});

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
    width: 250,
    height: 50,
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
//var url = 'http://localhost:8000'
  // let collection = {}
  // collection.email = this.state.email,
  // collection.password = this.state.password,
  // console.warn(collection);