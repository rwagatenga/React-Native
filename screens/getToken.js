var React = require('react');
var ReactNative = require('react-native');
var t = require('tcomb-form-native');
var {
    AppRegistry,
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    AlertIOS,
} = ReactNative;

var STORAGE_KEY = 'id_token';
var Form = t.form.Form;
var Person = t.struct({
    username: t.String,
    password: t.String
});
const options = {};
var AwesomeProject = React.createClass({
    async _onValueChange(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    },
    async _getProtectedQuote() {
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    fetch("http://localhost:3001/api/protected/random-quote", {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + DEMO_TOKEN
        }
    })
    .then((response) => response.text())
    .then((quote) => { 
        AlertIOS.alert(
        "Chuck Norris Quote:", quote)
    })
    .done();
},
_userSignup() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
        fetch("http://localhost:3001/users", {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: value.username, 
                password: value.password, 
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            this._onValueChange(STORAGE_KEY, responseData.id_token),
            AlertIOS.alert(
            "Signup Success!",
            "Click the button to get a Chuck Norris quote!"
            )
        })
        .done();
    }
},
_userLogin() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
        fetch("http://localhost:3001/sessions/create", {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: value.username, 
                password: value.password, 
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            AlertIOS.alert(
            "Login Success!",
            "Click the button to get a Chuck Norris quote!"
            ),
            this._onValueChange(STORAGE_KEY, responseData.id_token)
        })
        .done();
    }
},
async _userLogout() {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        AlertIOS.alert("Logout Success!")
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
},