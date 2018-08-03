import React, { Component } from 'react';
import axios from 'axios';
import User from './user'

export default class Users extends Component {
    users = [];
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.users = response.data;
        });
    }

    render() {
        const users = this.users;
        return (
            <React.Fragment>
                {users.map((user, index) => <User key={index} {...user} />)}
            </React.Fragment>
        );
    }
}