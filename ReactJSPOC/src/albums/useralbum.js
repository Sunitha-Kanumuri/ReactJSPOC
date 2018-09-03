import React, { Component } from 'react';
import Album from './album';
import './album.css'
import axios from 'axios';

export default class UserAlbum extends Component {
    constructor(props) {
        super();
        this.state = { comments: false, userId: 0, albums:[] };
    }

    onBtnClick = (id) => {
        this.setState({ userId:id });
        this.getComments();
    }

    getComments() {
        axios.get(`https://jsonplaceholder.typicode.com/users/` + this.state.userId + `/albums`).then(res => {
            const albums = res.data;
            this.setState({ albums });
        });
    }
    render() {
        return (
            <section className="container">
                <div>
                    <h1 style={{ cursor: "pointer" }} onClick={() => this.onBtnClick(this.props.id)}>
                        {this.props.name}
                    </h1>
                </div>
                <div>
                    {this.state.albums.length>0 &&<h4>Albums:</h4>}
                </div>
                <div>
                    {this.state.albums && this.state.albums.map((album, index) => {
                        return (
                            <li key={index} style={{ width:"90%", display: "inline-block", padding: "10px" }}>
                                <Album {...album} />
                            </li>
                        );
                    })}
                </div>
            </section>
        );
    }
}
