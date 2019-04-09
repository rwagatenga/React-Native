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
    ImageBackground,
    KeyboardAvoidingView,
     NetInfo
    } from 'react-native';
import OfflineNotice from './OfflineNotice'
import custom from './custom';

class Login extends Component
{
 
	static navigationOptions = {
    header:null,
          title: 'Login',
         
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor:'#8589d2',
            // borderBottomColor: '#ffffff',
            // borderBottomWidth: 3,
            textAlign: 'center',
            
          },
          headerTitleStyle: {
            color: '#000',
            textAlign: 'center',
            alignSelf: 'center'
            },
     
       
      };
  constructor(props){
  super(props);
  this.state = {
    InputEmail: "",
    InputPassword: "",
  }
}
//-------
      componentDidMount() {
  NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

  NetInfo.isConnected.fetch().done(
    (isConnected) => { this.setState({ status: isConnected }); }
  );
}

componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
}

handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
}
//---------

LoginFunction = () => {
  if(this.state.status){
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

  fetch('http://yateke.herokuapp.com/api/v1/login', {
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

      //alert(responseJson));
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
      if (responseJson) {
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

  }
  else{
    alert('Check your Internet Connection.');
  }
  
}

 render()
 {
    return(
       <View style = { styles.mainContainer }>
       <ImageBackground source={require('../images/5.jpg')} style={{width: '100%', height: '100%', }}>
       {/* <Image style = {{width:80, height:83}} source = {require('../images/ayat.png')}/> */}
     
       <OfflineNotice />
     
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text></Text>
          <Text style = { styles.TextStyle }>Sign In </Text>
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'E-mail'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          autoCapitalize="none"
          keyboardType = "email-address"
          onSubmitEditing = {() => this.password.focus()}
          onChangeText = {InputEmail => this.setState({InputEmail})}
          value = {this.state.InputEmail ===''?null: this.state.InputEmail}
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
          <Text></Text>
          </KeyboardAvoidingView>

     
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

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:"35%",
    backgroundColor:'rgba(0,0,0,0.8)',


  },
  TextStyle:
 {
    fontSize: 35,
    color: '#8589d2',
    fontWeight:"300",
    fontFamily:'CaviarDreams',
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
    fontSize: 15,
    fontFamily:'CaviarDreams',
    textAlign: 'center',
    color: '#ffffff',
    
  },
  inputBox: {
    width: "80%",
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#ddd',
    textAlign:"center",
    backgroundColor: '#rgba(0,0,0,0.5)',
    borderColor:'rgba(220,220,220,0.5)',
    borderWidth:0.3,
    alignSelf:"center",
    marginVertical: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },
  button: {
    width: 280,
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius:50,
    paddingRight: 5,
    alignSelf:"center",
    paddingLeft: 5,
    borderColor:"#fff",
    borderWidth:0.5,
    backgroundColor:'#8589d2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'#000000',
    shadowOffset:{width:0 ,  height:2},
    elevation:5
   
  },
  question: {
    marginVertical: 10,
  },
});
export default Login;