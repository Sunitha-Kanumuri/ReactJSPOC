import React, { Component } from 'react';
import Post from './post';
import Search from '../../common/search';
import axios from 'axios';
import "./post.css";

export default class Posts extends Component {
    constructor(props) {
        super();
        this.state = { posts: [] };
    }

    componentDidMount() {
        console.log(this.props.location, "Rout");
        this.getPosts();
    }

    getPosts=()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users/1/posts`).then(res => {
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