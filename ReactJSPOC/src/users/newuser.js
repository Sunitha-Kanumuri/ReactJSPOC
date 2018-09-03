import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newuser.css'

export default class Form extends Component {
    static propTypes = {
        name: PropTypes.string.isrequired,
        email: PropTypes.string.isrequired,
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            street: '',
            suite: '',
            city: ''
        }
    }
    handleUserName(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handleUserEmail(e) {
        const email = e.target.name;
        const value = e.target.value;
        this.setState({ [email]: value });
    }
    handleUserStreet(e) {
        const street = e.target.name;
        const value = e.target.value;
        this.setState({ [street]: value });
    }
    handleUserSuite(e) {
        const suite = e.target.name;
        const value = e.target.value;
        this.setState({ [suite]: value });
    }
    handleUserCity(e) {
        const city = e.target.name;
        const value = e.target.value;
        this.setState({ [city]: value });
    }

    onBtnClick(event) {
        event.preventdefault();
        event.stopPropagation();
        return false;
    }

    render() {
        return (
            <section className="userContainer">
            <form>
                <h2>Add User</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="name" className="form-control"
                        name="name" value={this.state.name} onChange={(event) => this.handleUserName(event)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control"
                        name="email" value={this.state.email} onChange={(event) => this.handleUserEmail(event)} required />
                </div>
                <h4>Address</h4>
                <div className="form-group">
                    <label htmlFor="street">Street:</label>
                    <input type="street" className="form-control"
                        name="street" value={this.state.street} onChange={(event) => this.handleUserStreet(event)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="suite">Suite:</label>
                    <input type="suite" className="form-control"
                        name="suite" value={this.state.suite} onChange={(event) => this.handleUserSuite(event)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="city" className="form-control"
                        name="city" value={this.state.city} onChange={(event) => this.handleUserCity(event)} required />
                </div>
                <button type="submit" className="btn btn-primary button" onClick={(event) => this.onBtnClick(event)}>
                    Add
                </button>
            </form>
            </section>
        )
    }
}