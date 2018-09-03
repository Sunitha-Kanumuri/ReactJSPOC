import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./user.css";

export default class User extends Component {
  render() {
    return (
      <section style={{ width: "100%", display: "inline-block", padding: "20px" }}>
        <div className="card">
          <img width="100px" alt="Profile" src={require('../assets/img/user.png')} />
          <h1>{this.props.name}</h1>
          <p>{this.props.email}</p>
          <p className="title">{this.props.website}</p>
          <address className="address">
            <p>{this.props.address.street}</p>
            <p>{this.props.address.suite}</p>
            <p>
              {this.props.address.city} - {this.props.address.zipcode}
            </p>
          </address>
          <p>
            <NavLink id="button" to={"/Posts/" + this.props.id} activeClassName="active">
              Posts
            </NavLink>
            <NavLink id="button" to={"/ToDos/" + this.props.id} activeClassName="active">
              ToDos
            </NavLink></p>
        </div>
      </section>
    );
  }
}
