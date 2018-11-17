import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TopBar from './TopBar';
import Content from './Content';

export default class MainPage extends Component {

  render() {
    return (
      <View style={{flex: 1}} >
        <View style={{flex: 1, backgroundColor: "red"}}>
          <Text style={{color: "white"}}>Main Page</Text>
        </View>
        <TopBar style={this.props.topStyle} text={this.props.topText} />
        <Content style={this.props.contentStyle} text={this.props.contentText} />
      </View>
    );
  }

}
