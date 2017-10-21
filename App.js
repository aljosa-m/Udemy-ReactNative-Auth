import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
	componendWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBtB0KN1x1bH8eC0XhbaUW2wDz-mNRQbZs',
			authDomain: 'auth-2df5f.firebaseapp.com',
			databaseURL: 'https://auth-2df5f.firebaseio.com',
			projectId: 'auth-2df5f',
			storageBucket: 'auth-2df5f.appspot.com',
			messagingSenderId: '114691438374'
		});
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
        <LoginForm />
			</View>
		);
	}
}
