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

class Makes extends Component
{
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
  constructor(props){
  super(props);
  this.state = {
    InputWmeter: '',
  }
}
LoginFunction = () => {
  const {InputWmeter} = this.state;

  if (InputWmeter == "" ) {
    alert("Water Meter Field is Empty");
  }
  else{
  fetch('http://192.168.43.198:8000/api/v1/check', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'UTg0Y0NENE01OXZEdkFtckNmM0lFdzJJWjdoVUVBZmc3Y25Kc1hNNVJ0Z0liNFdlVlZMZkZPeVl5M0ls5b8d1235e4bd2'
    },
    body: JSON.stringify({
      counterNumber: InputWmeter,
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message) {
        alert(responseJson.message);
      }
      else
        if (responseJson.messege) {
          alert(responseJson.messege);
          this.props.navigation.navigate(`ViewScreen`, { param: responseJson });
        }
      else {
        //alert(responseJson.Names);
        this.props.navigation.navigate(`ViewScreen`, { param: responseJson });
      }
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
          <Text style = { styles.TextStyle }>Welcome to AYATEKE Star</Text>
          </View>

          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Water Meter'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          //autoCapitalize="none"
          //keyboardType = "email-address"
          onChangeText = {InputWmeter => this.setState({InputWmeter})}
          />
          
          <TouchableOpacity style = {styles.button} onPress = {this.LoginFunction.bind(this)}>
          <Text style = {styles.buttonText}>Check</Text>
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
export default Makes;