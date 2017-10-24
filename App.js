import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null}

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBtB0KN1x1bH8eC0XhbaUW2wDz-mNRQbZs',
			authDomain: 'auth-2df5f.firebaseapp.com',
			databaseURL: 'https://auth-2df5f.firebaseio.com',
			projectId: 'auth-2df5f',
			storageBucket: 'auth-2df5f.appspot.com',
			messagingSenderId: '114691438374'
		});

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
	}

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Button
          onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
        {this.renderContent()}
			</View>
		);
	}
}
