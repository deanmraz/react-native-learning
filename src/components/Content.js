import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Content extends Component {

  render() {
    return (
      <View style={this.props.style}>
        <Text style={{color: "white"}}>{this.props.text}</Text>
      </View>
    );
  }

}
