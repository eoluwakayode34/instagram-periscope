import React from 'react';
import {  View, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons'


 const Heart = props => (
    <View {...props} style={[styles.heart, props.style]}>
                <AntDesign name='heart' size={48} color={props.color}/>
    </View>
)

const styles = StyleSheet.create({
    
    heart: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
       container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
       }
})



export default Heart;