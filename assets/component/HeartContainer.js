import React from 'react'
import {Animated, StyleSheet} from 'react-native';
import Heart from './Heart'

export default class HeartContainer extends React.Component{
    render(){
      return(
            <Animated.view style={[styles.heartContainer]}>
                <Heart color='purple' />
            </Animated.view>
  
      )
    }
  };

  const styles = StyleSheet.create({
    heartContainer: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'transparent',
          },
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }        
  })