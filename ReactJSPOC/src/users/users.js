import React, { Component } from 'react';
import User from './user';
import axios from 'axios';

export default class Users extends Component {
  constructor(props) {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <ul style={{ listStyleType: 'none', margin: '0', padding: '0', width:'90%' }}>
        {this.state.users.map((user, index) => {
          return (
            <li key={index} style={{width:"23%", display: "inline-block"}} className="user">
              <User {...user}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
