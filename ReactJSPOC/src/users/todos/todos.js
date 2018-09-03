import React, { Component } from 'react';
import ToDo from './todo';
import Search from '../../common/search';
import axios from 'axios';

export default class ToDos extends Component {
    constructor(props) {
        super();
        this.state = { todos: [], userId:0 };
    }

    componentDidMount=()=> {
        let str = this.props.location.pathname.toString();
        const userId = str.substring(str.lastIndexOf("/") + 1, str.length);
        this.state.userId = userId;
        this.getToDos();
    }

    getToDos=()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.userId}/todos`).then(res => {
            const todos = res.data;
            this.setState({ todos });
        });
    }

    handleFilterUpdate = (filterValue) => {
        const filteredData = this.state.todos.filter(filterData => {
            return filterData.title
                .toLowerCase()
                .startsWith(filterValue.toLowerCase()) === true
        });
        this.setState({ todos: filteredData });
    }

    render() {
        return (
            <ul style={{ listStyleType: 'none', margin: '0', padding: '0', width: '85%' }}>
                <div style={{ margin: "10px" }}>
                    <Search updateFilter={this.handleFilterUpdate} clearFilter={this.getToDos} />
                </div>
                <div style={{ width: '100%' }}>
                    {this.state.todos.map((todo, index) => {
                        return (
                            <li key={index} style={{ width: "93%", display: "inline-block", margin: "27px" }} className="todo">
                                <ToDo {...todo} />
                            </li>
                        );
                    })}
                </div>
            </ul>

        );
    }
}