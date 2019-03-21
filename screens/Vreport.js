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

export class Vreport extends Component {
  constructor (props) {
    super (props);
    const { param } = this.props.navigation.state.params;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
      'Done: ' +param.Done,
      'Undone: ' +param.Undone,
      'View: '  +param.View.map((views) => views.firsname)
      ]),
      // dataSource: ds.cloneWithRows(param),
    }
    };
    static navigationOptions = {
          title: 'Check Receipt',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor:'#8589d2',
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
    backgroundColor: '#ddd',
    
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
  width: 280,
  height: 50,
  paddingTop: 13,
  paddingBottom: 5,
  borderRadius:50,
  paddingRight: 5,
  color:"white",
  alignSelf:"center",
  textAlign:"center",
  paddingLeft: 5,
  fontFamily:'CaviarDreams',
  borderColor:"#fff",
  borderWidth:0.5,
  backgroundColor:'#8589d2',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor:'#000000',
  shadowOffset:{width:0 ,  height:2},
  elevation:5
  },
  inputBox: {
    width: "80%",
    height: 50,
    fontFamily:'CaviarDreams',
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
    fontFamily:'CaviarDreams',
    borderWidth:0.5,
    backgroundColor:'#2649b2',
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


export default Vreport;