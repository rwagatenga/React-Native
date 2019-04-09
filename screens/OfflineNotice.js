import React, { PureComponent } from 'react';
import { View, Text, NetInfo } from 'react-native';
import ReactTimeout from 'react-timeout'
import custom from './custom';

function CheckInternet() {
  return (
    <View style={custom.offlineContainer}>
      <Text style={custom.offlineText}>No Internet Connection</Text>
    </View>
  );
}

function Connected() {

    return ( 
      
        <View style={custom.onlineContainer} onLoad={this.handleClick}> 
      <Text style={custom.offlineText}>Connected </Text>
    </View>
    
  );
}

export default class OfflineNotice extends PureComponent {
   constructor(props) {
    super(props);
    this.state = {
      isConnected: true, 
    }
    
}

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    
}

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
      this.setState({isConnected })
  };
    render() {
    if (!this.state.isConnected) {
      return <CheckInternet />;
    }
    return <Connected />;
  } 
}