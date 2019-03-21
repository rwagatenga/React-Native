import React from 'react';
import { View } from 'react-native'
const Card =(props)=>{
return(
    <View style={styles.myCard}>
            {props.children}
    </View>
)
}
export default Card;

const styles={
    myCard:{
        backgroundColor:'rgba(0,0,20,0.8)',
        //  flex:1,
        height:"100%",
        width:"100%",
       
    }
}