import React, { Component } from 'react';
import "./Meme.css";

export default class Meme extends Component {

    render() {
        const { memeData } = this.props;
        return (
            <div>
                <h3>{memeData.title}</h3>
                <img
                className="img-meme"
                key={memeData._id}
                src={memeData.uri}
                alt={memeData.title}
                />
            </div>
        )
    }
}