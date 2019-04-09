import React, {Component} from 'react';
import {View, Text, TouchableOpacity, NetInfo} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class Logout extends Component {
constructor (props) {
    super (props);
    //const { param } = this.props.navigation.state.params;
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
render() {
    //const {navigate} = this.props.navigation;
    return (
    <View style={{ backgroundColor: '#rgb(0,255,255)' }}>
        <TouchableOpacity onPress = {this.LogoutFunction.bind(this)}>
          <Text>Logout</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
export default Logout;