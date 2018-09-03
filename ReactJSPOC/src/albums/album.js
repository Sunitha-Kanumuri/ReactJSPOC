import React, { Component } from 'react';
import './album.css'
import axios from 'axios';
import Photos from './photos';
export default class Album extends Component {
    constructor(props) {
        super();
        this.state = { comments: false, albumId: 0, photos: [] };
    }

    onBtnClick = (id) => {
        this.setState({ albumId:id });
        this.getComments();
    }

    getComments() {
        axios.get(`https://jsonplaceholder.typicode.com/albums/` + this.state.albumId + `/photos`).then(res => {
            const photos = res.data;
            this.setState({ photos });
        });
    }
    render() {
        return (
            <section className="container" style={{ width: "100%", display: "inline-block", padding: "20px" }}>
                <div style={{ margin: "10px" }}>
                    <h1 style={{ cursor: "pointer" }} onClick={() => this.onBtnClick(this.props.id)}>{this.props.title}</h1>
                </div>
                <div style={{ margin: "10px" }}>
                    {this.state.photos.length===0 ? (
                        <span></span>
                    ) : (
                        <h4>Photos:</h4>
                        )}
                </div>
                <div>
                    {this.state.photos && this.state.photos.map((photo, index) => {
                        return (
                            <li key={index} style={{ width: "30%", display: "inline-block", padding: "10px" }}>
                                <Photos {...photo} />
                            </li>
                        );
                    })}
                </div>
            </section>
        );
    }
}
