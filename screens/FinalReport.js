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
     NetInfo
    } from 'react-native';
import OfflineNotice from './OfflineNotice';
import custom from './custom';

export class FinalReport extends Component {
  constructor (props) {
    super (props);
    const { param } = this.props.navigation.state.params;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
      'Names: ' + param.Names,
      'Water Meter: ' + param.Water_Meter,
      'M3 Consumed: ' + param.M3_Consumed,
      'Amount: ' + param.amount,
      'Total Debit: ' + param.Total_Debit,
      'Comment: ' + param.Comment,
      ]),
      wmeter: param.Water_Meter,
    }
  }
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
  BeBack = () => {
    this.props.navigation.navigate('ReportScreen');
  }
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
        render() {
    return(
      <View style = {styles.mainContainer}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
          <TouchableOpacity style = {styles.buttonTouch} onPress = { this.BeBack }>
            <Text style ={styles.buttonText}>Rolove Another One</Text>
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


export default FinalReport;