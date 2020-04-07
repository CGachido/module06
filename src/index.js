import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal'

import './config/ReactotronConfig';

import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init('11272462-6ea1-4992-b3ca-b97e0bac3c22');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillMount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (data) => {

  }

  onReceived = (notification) => {

  }

  onIds = (id) => {

  }

  render () {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
