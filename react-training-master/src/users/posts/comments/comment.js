import React, { Component } from 'react';
import "./comment.css";

export default class Comment extends Component {
    render() {
        return (
            <section className="card" style={{ width: "100%", display: "inline-block", padding: "20px" }}>
                <div  style={{ margin: "10px"}}>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.body}</p>
                </div>
            </section>
        );
    }
}
