
//first install dependency 
//npm install 'react-native-form-validator' --save

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class Profile extends ValidationComponent {

    constructor(props) {
        super(props);
        // this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
        this.state = { name: "", email: "", number: "", date: "", result: '' };
    }

    onChangeTextName = (text) => {
        this.setState({ name: text });
        this.validate({
            name: { minlength: 3, maxlength: 7, required: true }
        });

    }
    onChangeTextEmail = (text) => {
        this.setState({ email: text });
        this.validate({
            email: { email: true }
        });

    }
    onChangeTextDigit = (text) => {
        this.setState({ number: text });
        this.validate({
            number: { numbers: true }
        });

    }
    onChangeTextDate = (text) => {
        this.setState({ date: text });
        this.validate({
            date: { date: 'YYYY-MM-DD' }
        });

    }

    _onSubmit = () => {

     //   
        this.state.result = this.validate({
            name: { minlength: 3, maxlength: 7, required: true },
            email: { email: true, required: true },
            number: { numbers: true, required: true },
            date: { date: 'YYYY-MM-DD', required: true },

        });
        this.setState({});
        if (this.isFormValid()) {

            this.setState({ loading: true, disabled: true }, () => {
                fetch('http://192.168.1.141:3000/api/user/adduser',
                    {
                        method: 'POST',
                        headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(
                            {
                                userName: this.state.name,
                                password: this.state.number,
                                email: this.state.email,
                                mobile: "9514523569",
                            })

                    }).then((response) => response.json()).then((responseJson) => {
                        console.log(responseJson.affectedRows);
                        this.setState({ loading: false, disabled: false });
                        this.setState({name: ''});
                    }).catch((error) => {
                        console.error(error);
                        this.setState({ loading: false, disabled: false });
                    });
            });

           // alert(this.state.result);
        }

    }

    render() {

        return (
            <View style={{ paddingVertical: 30 }}>
                <Text>Name</Text>
                <TextInput ref="name" onChangeText={(name) => this.onChangeTextName(name)} value={this.state.name} />
                <Text>{(this.isFieldInError('name') && this.getErrorsInField('name')) ? this.getErrorsInField('name') : ''}</Text>

                <Text>Email</Text>
                <TextInput ref="email" onChangeText={(email) => this.onChangeTextEmail(email)} value={this.state.email} />
                <Text>{(this.isFieldInError('email') && this.getErrorsInField('email')) ? this.getErrorsInField('email') : ''}</Text>
                <Text>Number</Text>
                <TextInput ref="number" onChangeText={(number) => this.onChangeTextDigit(number)} value={this.state.number} />
                <Text>{(this.isFieldInError('number') && this.getErrorsInField('number')) ? this.getErrorsInField('number') : ''}</Text>
                <Text>DoB</Text>
                <TextInput ref="date" onChangeText={(date) => this.onChangeTextDate(date)} value={this.state.date} />
                <Text>{(this.isFieldInError('date') && this.getErrorsInField('date')) ? this.getErrorsInField('date') : ''}</Text>

                <TouchableHighlight onPress={this._onSubmit}>
                    <Text style={{ marginTop: 10 }}>Register</Text>

                </TouchableHighlight>
                <Text style={{ marginTop: 10 }}>Login</Text>

            </View>
        );
    }

}