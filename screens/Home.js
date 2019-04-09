//Home.js
import React, { Component } from 'react';
import {Animated} from 'react-native'
import { AppRegistry,
		 StyleSheet, 
		 Text, 
		 View, 
		 Image, 
		 TouchableOpacity, 
		 TextInput, 
		 Alert, 
     Keyboard,
     StatusBar,
		 ImageBackground,
     NetInfo
		} from 'react-native';
import Card from '../screens/Card';
import OfflineNotice from './OfflineNotice'
import custom from './custom';
export class Home extends Component {

  state={
    fadeIn:new Animated.Value(0),
  }
 
  
	static navigationOptions = {
    header:null,
          title: 'Welcome',
          headerTintColor: '#ffffff',
          fontFamily:'CaviarDreams',
          headerStyle: {
            backgroundColor:'#2649b2',
      
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };
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

getValue(){
  //alert(`is connected: ${this.state.status}`);
  if(this.state.status){
    //alert('Internet is connected.');
    this.props.navigation.navigate('LoginScreen');

  }else{
    alert('Check your Internet Connection.');
  }
}
    
  render() {
    
    return (

      <View style = {styles.mainContainer}>

        
        <StatusBar 
        backgroundColor = "#8589d2"
        />
      <ImageBackground source={require('../images/3.jpg')} style={styles.BACK}>
<Card> 
<OfflineNotice />
<View style={styles.title}>

        <Image style = {{width:150, height:150}} source = {require('./../images/ayat.png')}/>
      </View>
      <View style={styles.header}>
          <Text style = { styles.TextStyle }>WATER FOR YOUR LIFE</Text>
          <Text style = { styles.TextStyle2 }>Our Prime Concern</Text>
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity style = {styles.buttonTouch} onPress={this.getValue.bind(this)}>
            <Text style ={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          </View>
</Card>
     
        
         
          
          
        </ImageBackground>
       
       </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {

    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#ffffff'
  },
  BACK:{
width:'100%',
height:'100%'
  },
  title:{
flex:1,
justifyContent:"center",
alignItems:"center",
paddingTop:120
  },
  Logo:{
flex:2
  },
  TextStyle:
 {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
    fontWeight:"300",
    color: '#ffffff',
    justifyContent:'center',
    fontFamily:'CaviarDreams',
 },
 TextStyle2:{
  fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#8589d2',
    justifyContent:'center',
    marginTop:20,
    fontFamily:'CaviarDreams',
 },
 header:{
justifyContent:'center',
alignItems:'center',
paddingTop:'50%',
padding:10





 },
 containerBtn:{
justifyContent:'center',
alignItems:'center',
padding:'20%'
 },
 buttonTouch:
 {
    width: 280,
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius:50,
    paddingRight: 5,
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
 buttonText: {
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing:3,
    justifyContent:'center',
    alignItems:'center',
     fontFamily:'CaviarDreams',
     shadowColor:'#000000',
     shadowOffset:{width:0 ,  height:2},
     elevation:5
 
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