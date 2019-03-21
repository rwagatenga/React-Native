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

class DailPay extends Component
{
	static navigationOptions = {
          title: 'Customer Payment',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor:'#8589d2',
           
          },
          headerTitleStyle: {
            fontSize: 18,
            fontFamily : "CaviarDreams"
          },
      };
  constructor(props){
  super(props);
  this.state = {
    InputWmeter: '',
    InputMoney:''
  }
}
PayFunction = () => {
  const {InputWmeter} = this.state;
  const {InputMoney} = this.state;
  if (InputWmeter == "" ) {
    alert("Water Meter Field is Empty");
  }
  else
  if (InputMoney == "" ) {
    alert("InputMoney Field is Empty");
  }
  else{

  fetch('http://yateke.herokuapp.com/api/v1/pay', {
  // // fetch('http://192.168.43.16:8000/api/v1/add', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'UTg0Y0NENE01OXZEdkFtckNmM0lFdzJJWjdoVUVBZmc3Y25Kc1hNNVJ0Z0liNFdlVlZMZkZPeVl5M0ls5b8d1235e4bd2'
    },
    body: JSON.stringify({
        WaterMeter: InputWmeter,
        Money: InputMoney
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message) {
        alert(responseJson.messege);
      }
      else
        if (responseJson.messege) {
          alert(responseJson.messege);
        //   this.props.navigation.navigate(`ViewScreen`, { param: responseJson });
       
        }
      else {
        alert(['Names: '+responseJson.Names, ' Payed: '+responseJson.Payed, ' Left: '+responseJson.Left+' ']);
        // this.props.navigation.navigate(`DailPay`, { param: responseJson });
      
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
       <ImageBackground source={require('../images/back3.png')} style={{width: '100%', height: '100%', }}>
<View>
<ImageBackground source={require('../images/user.png')} style={{width: '100%', height: '100%', }}>
<View style={styles.mainContainer}>
<TextInput style = {styles.inputBox}
          underlineColorAndroid = '#8589d2'
          placeholder = 'Customer Id Number '
          placeholderTextColor = "#a7a7a7"
          selectionType = "#ffffff"
          fontFamily = "CaviarDreams"
          //autoCapitalize="none5e5e5
          //keyboardType = "email-address"
          onChangeText = {InputWmeter => this.setState({InputWmeter})}
          />
       
       <TextInput style = {styles.inputBox}
          underlineColorAndroid = '#8589d2'
          placeholder = 'Money Payed'
          placeholderTextColor = "#a7a7a7"
          selectionType = "#ffffff"
          fontFamily = "CaviarDreams"
          //autoCapitalize="none5e5e5
          //keyboardType = "email-address"
          onChangeText = {InputMoney => this.setState({InputMoney})}
          />

          <TouchableOpacity style = {styles.button} onPress = {this.PayFunction.bind(this)}>
          <Text style = {styles.buttonText}>Pay</Text>
          </TouchableOpacity>
          <Text></Text>
</View>

          </ImageBackground>     
</View>
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
   
   
  },
  TextStyle:
 {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
 },
//  buttonTouch:
//  {
//   width: 280,
//   height: 50,
//   paddingTop: 5,
//   paddingBottom: 5,
//   borderRadius:50,
//   paddingRight: 5,
//   alignSelf:"center",
//   paddingLeft: 5,
//   borderColor:"#fff",
//   borderWidth:0.5,
//   backgroundColor:'rgba(0,0,255,0.1)',
//   justifyContent: 'center',
//   alignItems: 'center',
//   shadowColor:'#000000',
//   shadowOffset:{width:0 ,  height:2},
//   elevation:5
//  },
 buttonText: {
    fontSize: 14,
    fontFamily:'CaviarDreams',
    textAlign: 'center',
    color: '#fff',
    
  },
  inputBox: {
    width: "70%",
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000',
    textAlign:"center",
    // backgroundColor: '#2649b2',
    // borderColor:'rgba(220,220,220,0.5)',
    // borderWidth:0.3,
    alignSelf:"center",
    marginVertical: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },
  button: {
    width: 250,
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius:50,
    paddingRight: 5,
    alignSelf:"center",
    paddingLeft: 5,
    // borderColor:"#2649b2",
    // borderWidth:0.5,
   shadowColor:"#000000",
   shadowOffset:{width:0 , height:2},
   elevation:5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#8589d2",
    
  },
  question: {
    marginVertical: 10,
  },
});
export default DailPay;