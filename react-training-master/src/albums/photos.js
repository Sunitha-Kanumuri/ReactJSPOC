import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
import "./album.css";

export default class Photos extends Component {
    render() {
        return (
            <section className="card" style={{ width: "100%", display: "inline-block", padding: "20px" }}>
                <ModalImage
                    small={this.props.thumbnailUrl}
                    large={this.props.url}
                    alt="photo"
                />
            </section>
        );
    }
}
