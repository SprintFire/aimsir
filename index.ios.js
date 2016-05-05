/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavigationBar from 'react-native-navbar';

class aimsir extends Component {
  render() {
    const rightButtonConfig = {
      title: 'Settings',
      handler: () => <Settings />
    };

    const titleConfig = {
      title: 'A I M S I R',
    };

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig} />
          <Text style={styles.welcome}>
            Welcome to Aimsir!
          </Text>
          <Text style={styles.instructions}>
            Aimsir is a weather app.
          </Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: 'Settings',
    };

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Avenir',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('aimsir', () => aimsir);
