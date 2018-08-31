import React, { Component } from 'react';
import UserAlbum from './useralbum';
import axios from 'axios';

export default class Albums extends Component {
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
      <ul style={{ listStyleType: 'none', margin: '0', padding: '0', width:'100%' }}>
        {this.state.users.map((user, index) => {
          return (
            <li key={index} style={{width:"82.5%", margin:"10px", display: "inline-block"}}>
              <UserAlbum {...user}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
