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
	     AsyncStorage,
	     ImageBackground
		} from 'react-native';

class Login extends Component
{
	static navigationOptions = {
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
  constructor(props){
  super(props);
  this.state = {
    InputEmail: "",
    InputPassword: "",
  }
}
LoginFunction = () => {
  const {InputEmail} = this.state;
  const {InputPassword} = this.state;
  if (InputEmail == "" || InputPassword == "") {
    alert("Fields are Empty");
  }
  else if (InputEmail == "") {
    alert("E-mail Field is Empty");
  }
  else if (InputPassword == "") {
    alert("Password Field is Empty");
  }
  else{
  fetch('http://192.168.43.198:8000/api/v1/login', {
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
      //alert(responseJson);
      for (var key in responseJson) {
        if (responseJson.hasOwnProperty(key)) {
          // alert(key + ": " + responseJson[key]);
          // this.props.navigation.navigate('ReportScreen');
           if(responseJson[key] == responseJson.Hello){
           	//AsyncStorage.setItem('access_token', responseJson)
            alert(key + " " + responseJson[key]);
            this.props.navigation.navigate('ReportScreen');
          }
          else{
           alert(key + " " + responseJson[key]);
          }
        }
      }
      // if (responseJson) {
      //   Alert.alert('Successfully Logged in');
      //   //this.props.navigation.navigate("Welcome");
      // }
      // else{
      //   Alert.alert('Invalid E-mail or Password');
      // }
    }).catch((error) => {
      console.error(error);
    });
    Keyboard.dismiss();
    }
}

 render()
 {
    return(
       <View style = { styles.mainContainer }>
       <ImageBackground source={require('../images/3.jpg')} style={{width: '100%', height: '100%', }}>
       <Image style = {{width:80, height:83}} source = {require('../images/ayat.png')}/>
         <View style={{marginBottom: 20}}>
          <Text style = { styles.TextStyle }> Welcome to My App </Text>
          </View>

          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'E-mail'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          autoCapitalize="none"
          keyboardType = "email-address"
          onSubmitEditing = {() => this.password.focus()}
          onChangeText = {InputEmail => this.setState({InputEmail})}
          value = {this.state.InputEmail}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Password'
          placeholderTextColor = "#ffffff"
          autoCapitalize="none"
          secureTextEntry = {true}
          ref = {(input) => this.password = input}
          onChangeText = {InputPassword => this.setState({InputPassword})}
          value = {this.state.InputPassword}
          
          />
          <TouchableOpacity style = {styles.button} onPress = {this.LoginFunction.bind(this)}>
          <Text style = {styles.buttonText}>Login</Text>
          </TouchableOpacity>
          </ImageBackground>

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
export default Login;