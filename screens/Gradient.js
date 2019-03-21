import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const GradientHeader = props => (
    <View style={{ backgroundColor: '#rgba(0,255,0,0.8)' }}>
        <LinearGradient
          colors={['red', 'blue']}
          style={[StyleSheet.absoluteFill, { height: Header.HEIGHT }]}
        >
          <Header {...props} />
        </LinearGradient>
      </View>
    )
export default GradientHeader;