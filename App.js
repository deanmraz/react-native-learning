import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import MainPage from './src/components/MainPage';

export default class App extends React.Component {

  state = {
    topText: "toptext",
    contentText: "contentext",
  }

  changeOne = () => {
    this.setState({
      topText: "change 1",
      contentText: "change content 1",
    })
  }

  changeTwo = () => {
    this.setState({
      topText: "change 2",
      contentText: "change content 2",
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MainPage
          topStyle={styles.top}
          contentStyle={styles.content}
          topText={this.state.topText}
          contentText={this.state.contentText}
        />
        <View style={styles.nav}>
          <View style={styles.button}>
            <Button
              onPress={this.changeOne}
              title="Change 1"
              color="#fff"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.changeTwo}
              title="Change 2"
              color="#fff"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 2,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 3,
    backgroundColor: 'skyblue',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  }
});

App.defaultProps = {

}
