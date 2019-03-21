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
     AsyncStorage,
     ScrollView,
     ImageBackground,
     Button
    } from 'react-native';
    import Logout from './logout'
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/ayateke.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
export class Report extends Component {
  constructor (props) {
    super (props);
    //const { param } = this.props.navigation.state.params;
    }
  ViewReport = () => {
  //{
    
    this.props.navigation.navigate('PaymentScreen');
    // fetch('http://yateke.herokuapp.com/api/v1/pay',{
    //   method: "POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'UTg0Y0NENE01OXZEdkFtckNmM0lFdzJJWjdoVUVBZmc3Y25Kc1hNNVJ0Z0liNFdlVlZMZkZPeVl5M0ls5b8d1235e4bd2'
    //   },
    //   body
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   alert([responseJson.Names, responseJson.Payed, responseJson.Left]);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

  }
 LogoutFunction = () => {
        fetch('http://yateke.herokuapp.com/api/v1/logout', {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
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

  VreportFunction = () => {
  //   fetch('http://ayateke.herokuapp.com/api/v1/simple', {
  // // fetch('http://192.168.43.16:8000/api/v1/add', {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': 'UTg0Y0NENE01OXZEdkFtckNmM0lFdzJJWjdoVUVBZmc3Y25Kc1hNNVJ0Z0liNFdlVlZMZkZPeVl5M0ls5b8d1235e4bd2'
  //   }
    
  // }).then((response) => response.json())
  //   .then((responseJson) => {
  //     if (responseJson) {
  //       this.props.navigation.navigate(`VrepoScreen`, { param: responseJson });
  //     }
  //     else {
  //       alert("Something went wrong!");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
    fetch('http://yateke.herokuapp.com/api/v1/count', {
  // fetch('http://192.168.43.16:8000/api/v1/add', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'UTg0Y0NENE01OXZEdkFtckNmM0lFdzJJWjdoVUVBZmc3Y25Kc1hNNVJ0Z0liNFdlVlZMZkZPeVl5M0ls5b8d1235e4bd2'
    }
    
  }).then((response) => response.json())
    .then((responseJson) => {
      
      //alert( responseJson['View'].map((views) => views.firsname));
      // for (var key in responseJson) {
      //   if (responseJson.hasOwnProperty(key)) {
      //     // alert(key + ": " + responseJson[key]);
      //     // this.props.navigation.navigate('ReportScreen');
      //      if(responseJson[key] == responseJson){
      //       //AsyncStorage.setItem('access_token', responseJson)
      //       //alert(key + " " + responseJson[key]);
      //       //this.props.navigation.navigate('ReportScreen');
      //     }
      //     else{
      //      alert(key + " " + responseJson[key]);
      //     }
      //   }
      // }
      if (responseJson) {
        this.props.navigation.navigate(`VrepoScreen`, { param: responseJson });
      }
      else {
        alert("Something went wrong!");
      }
    }).catch((error) => {
      console.error(error);
    });
}
	static navigationOptions = {
          title: 'Receipt',
          headerRight:<TouchableOpacity
          title="Logout"
          color="#000"
          onPress = {()=>console.log("helllo wordl")}
           />,
           headerLeft: null,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor:'#8589d2',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };
  render() {
    //const {navigate} = this.props.navigation;
    return (
      
     <ImageBackground source={require('../images/back2.png')} style={{width: '100%', height: '100%', }}>
         <View style = {styles.mainContainer}>
         <ScrollView>
          <TouchableOpacity style = {styles.button} onPress = { this.MakeFunction }>
          <Text style = {styles.buttonText}>Make a Recept</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = { this.ViewReport.bind(this)} >
          <Text style = {styles.buttonText2}>Make Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = {this.VreportFunction.bind(this)}>
          <Text style = {styles.buttonText3}>View Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = {this.LogoutFunction.bind(this)}>
          <Text style = {styles.buttonText3}>Logout</Text>
          </TouchableOpacity>
         </ScrollView>
          <Text></Text>
          </View>
          </ImageBackground>
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
 },
 buttonTouch:
 {
  width: "100%",
  height: 50,
  paddingTop: 20,
  paddingBottom: 5,
  borderRadius:50,
  paddingRight: 5,
  alignSelf:"center",
  paddingLeft: 5,
  borderColor:"#fff",
  borderWidth:0.5,
  backgroundColor:'#2649b2',
  justifyContent: 'center',
  alignItems: 'center',
 },
 buttonText2: {
  width: 150,
  height: 150,
  paddingBottom: 5,
  color:"#fff",
  textAlign:"center",
  paddingTop:60,
  borderRadius:100,
  fontFamily:'CaviarDreams',
  alignSelf:"center",
  paddingLeft: 5,
  borderColor:"#ddd",
  borderWidth:0.5,
  backgroundColor:'#2589c2',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor:'#dddddd',
  shadowOffset:{width:0 ,  height:2},
  elevation:5
 },
 buttonText3: {
  width: 150,
  height: 150,
  paddingBottom: 5,
  color:"#fff",
  textAlign:"center",
  paddingTop:60,
  borderRadius:100,
  fontFamily:'CaviarDreams',
  alignSelf:"center",
  paddingLeft: 5,
  borderColor:"#ddd",
  borderWidth:0.5,
  backgroundColor:'#8589d2',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor:'#dddddd',
  shadowOffset:{width:0 ,  height:2},
  elevation:5
 },
 buttonText: {
  width: 150,
  height: 150,
  paddingBottom: 5,
  color:"#fff",
  textAlign:"center",
  paddingTop:60,
  borderRadius:100,
  fontFamily:'CaviarDreams',
  alignSelf:"center",
  paddingLeft: 5,
  borderColor:"#ddd",
  borderWidth:0.5,
  backgroundColor:'#1589b2',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor:'#dddddd',
  shadowOffset:{width:0 ,  height:2},
  elevation:5
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
    width: "100%",
    marginVertical: 10,
  },
  question: {
    marginVertical: 10,
  },
});


export default Report;