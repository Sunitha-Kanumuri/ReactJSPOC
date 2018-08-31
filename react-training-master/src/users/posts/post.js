import React, { Component } from 'react';
import Comment from './comments/comment';
import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super();
        this.state = { postId: 0, comments:[] };
    }

    onBtnClick = (id) => {
        this.setState({postId:id});
        this.getComments();
    }

    getComments() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.state.postId + `/comments`).then(res => {
            const comments = res.data;
            this.setState({ comments });
        });
    }
    render() {
        return (
            <section className="container">
                <div>
                    <h1 style={{ cursor: "pointer" }} onClick={() => this.onBtnClick(this.props.id)}>
                        {this.props.title}
                    </h1>
                    <p>{this.props.body}</p>
                </div>
                <div>
                    {this.state.comments.length===0 ? (
                        <span></span>
                        ) : (
                        <h4>Comments:</h4>
                    )}
                </div>
                <div>
                    {this.state.comments.length!==0 && this.state.comments.map((comment, index) => {
                        return (
                            <li key={index} style={{ display: "inline-block", padding: "10px" }} className="comment">
                                <Comment {...comment} />
                            </li>
                        );
                    })}
                </div>
            </section>
        );
    }
}
