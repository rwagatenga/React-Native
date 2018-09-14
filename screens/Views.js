//View.js

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
		 ImageBackground,
     ListView,
     ActivityIndicator,
     FlatList,
     List,
     Button
		} from 'react-native';

export class Views extends Component {
  constructor (props) {
    super (props);
    const { param } = this.props.navigation.state.params;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
      'Names: ' + param.Names,
      'Water Meter: ' + param.Water_Meter,
      'M3 Consumed: ' + param.M3_Consumed,
      'Amount: ' + param.amount
      ]),
      InputWmeter: param.Water_Meter,
    }
  }
  LoginFunction = () => {
    const {InputWmeter} = this.state;
    const {InputNewIndex} = this.state;

     if(InputNewIndex == "") {
      alert("New Index Field is Empty");
    }
    else{
  fetch('http://192.168.1.199:8000/api/v1/rolove', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'UTg0Y0NENE01OXZEdkFtckNmM0lFdzJJWjdoVUVBZmc3Y25Kc1hNNVJ0Z0liNFdlVlZMZkZPeVl5M0ls5b8d1235e4bd2'
    },
    body: JSON.stringify({
      water_meter: InputWmeter,
      index: InputNewIndex
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message) {
        alert(responseJson.messege);
      }
      else {
        //alert(responseJson.Names);
        this.props.navigation.navigate(`FinalScreen`, { param: responseJson });
      }
    }).catch((error) => {
      console.error(error);
    });
    Keyboard.dismiss();
    }
  }
	static navigationOptions = {
          title: 'Check Receipt',
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
    return(
      <View style = {styles.mainContainer}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'Water Meter'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          editable = {false}
          //autoCapitalize="none"
          //keyboardType = "email-address"
          onChangeText = {InputWmeter => this.setState({InputWmeter})}
          value = {this.state.InputWmeter}
          />
          <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = 'New Index'
          placeholderTextColor = "#ffffff"
          selectionType = "#ffffff"
          //autoCapitalize="none"
          //keyboardType = "email-address"
          onChangeText = {InputNewIndex => this.setState({InputNewIndex})}
          />
          <TouchableOpacity style = {styles.button} onPress = {this.LoginFunction.bind(this)}>
          <Text style = {styles.buttonText}>Rolove</Text>
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
    width: 300,
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


export default Views;