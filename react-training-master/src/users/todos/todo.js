import React, { Component } from 'react';
// import Search from '../../common/search';
import "./todo.css";

export default class ToDo extends Component {
    render() {
        var idName = 'card' + (this.props.completed ? '' : 'highlighted');
        return (
            <section className="container" id={idName}>
                <div>
                    <h1>
                        {this.props.title}
                    </h1>
                </div>
            </section>
        );
    }
}
