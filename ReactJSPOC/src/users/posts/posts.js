import React, { Component } from 'react';
import Post from './post';
import Search from '../../common/search';
import axios from 'axios';
import "./post.css";

export default class Posts extends Component {
    constructor(props) {
        super();
        this.state = { posts: [], userId: 0 };
    }

    componentDidMount() {
        let str = this.props.location.pathname.toString();
        const userId = str.substring(str.lastIndexOf("/") + 1, str.length);
        this.state.userId = userId;
        this.getPosts();
    }

    getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/` + this.state.userId + `/posts`).then(res => {
            const posts = res.data;
            this.setState({ posts });
        });
    }

    handleFilterUpdate = (filterValue) => {
        const filteredData = this.state.posts.filter(filterData => {
            return filterData.title
                .toLowerCase()
                .startsWith(filterValue.toLowerCase()) === true
        });
        this.setState({ posts: filteredData })
    }

    render() {
        return (
            <ul style={{ listStyleType: 'none', margin: '10px', padding: '0', width: '80%' }}>
                <div>
                    <Search updateFilter={this.handleFilterUpdate} clearFilter={this.getPosts} />
                </div>
                <div>
                    {this.state.posts.map((post, index) => {
                        return (
                            <li key={index} style={{ display: "inline-block", padding: "10px" }} className="post">
                                <Post {...post} />
                            </li>
                        );
                    })}
                </div>
            </ul>

        );
    }
}