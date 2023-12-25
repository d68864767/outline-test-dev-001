// Importing necessary libraries and components
const React = require('react');
const {AppRegistry} = require('react-native');
const App = require('./App');

// Defining the main component
class Main extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

// Registering the main component
AppRegistry.registerComponent('my-mobile-app', () => Main);
