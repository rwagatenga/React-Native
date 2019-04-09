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
         Button,
         ScrollView,
         SectionList,
           NetInfo
    } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
//import { Table, TableWrapper, Row, Rows, Col, Cell, EditableCell} from 'react-native-data-table';
import OfflineNotice from './OfflineNotice';
import custom from './custom';

export class Vreport extends Component {
  constructor (props) {
    super (props);
    const { param } = this.props.navigation.state.params;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows([
      'View: '  +param.View.map((views) => [views.firsname, views.code, views.amount, views.m3, views.name])
      ]),
      dataSource: ds.cloneWithRows([
      'Billed Clients: ' +param.Done,
      'UnBilled Clients: ' +param.Undone,
      'Names: '  +param.View.map((views) => [views.firsname]),
      'Code: ' +param.View.map((views) => [views.code]),
      'Amount: ' +param.View.map((views) => [views.amount]),
      'M3: ' +param.View.map((views) => [views.m3]),
      'Line: ' +param.View.map((views) => [views.name])
      ]),
      tableHead: ['Names', 'Code', 'Amount', 'M3', 'Line'],
      tableData: [
      ['BIKORIMANA David', '01D20IN0001', 15000, 12, 'KAMUSARE'],
      ['BIKORIMANA David', '01D20IN0001', 15000, 12, 'KAMUSARE'],
      ['BIKORIMANA David', '01D20IN0001', 15000, 12, 'KAMUSARE'],
      ]
        
      //])
      // dataSource: ds.cloneWithRows(param),
    }
    };
    //-------
     componentDidMount() {
        this.props.navigation.setParams({
            showLogout: this.LogoutFunction
        });
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
LogoutFunction = () => {
  if(this.state.status){
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
    else{
    alert('Check your Internet Connection.');
  }
}
  static navigationOptions = ({navigation}) => {
          const {params} = navigation.state;
          return{
          headerRight: <Button title = {'Logout'} onPress = {() => params.showLogout()} style = {{backgroundColor:'#8589d2',}}/>,
          // //title: 'Receipt',
          //  headerLeft: null,

          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor:'#8589d2',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
        };
          
      };
      renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };
     
    render() {
       const state = this.state;
    return(
      <View style = {styles.mainContainer}>
          <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
        <ScrollView horizontal = {true}>
        <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, width: 850, alignSelf: 'flex-start', borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        </View>
        </ScrollView>
        
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
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  container: { flex: 1, padding: 16, width: 850, alignSelf: 'flex-start', paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 40, width: 850, alignSelf: 'flex-start', backgroundColor: '#f1f8ff' },
  text: { margin: 6, alignSelf: 'flex-start', }
});


export default Vreport;