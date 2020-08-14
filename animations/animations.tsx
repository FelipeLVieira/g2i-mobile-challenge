import React from 'react';
import { Animated } from 'react-native';

class FadeInView extends React.Component<{ animLength:number }> {
  
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        useNativeDriver: true,
        toValue: 1,
        duration: this.props.animLength, 
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeInView;