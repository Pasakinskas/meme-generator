import React, { Component } from 'react';

import Meme from "../Meme/Meme";
import ApiService from '../../ApiService';
import "./MemeFeed.css";

export default class MemeFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            memes: [],
            showMemeFeed: false
        }
    }

    componentDidMount() {
        this.getMemeFeed();
    }

    getMemeFeed = async () => {
        const memes = await ApiService.getMemes();
        this.setState({memes});
    }

    toggleMemeFeed = () => {
        const showFeed = this.state.showMemeFeed;
        this.setState({
            showMemeFeed: !showFeed
        })
    }

    render() {
        const { memes, showMemeFeed } = this.state;
        const buttonText = !showMemeFeed ?
            "Show other user's creations"
            : "Hide other user's creations"
        return (
        <div>
            <h1>Memes created by other users</h1>
            <button className="btn-show-feed btn btn-info" onClick={this.toggleMemeFeed}>{buttonText}</button>
            {
            showMemeFeed && memes.map((meme) => {
                return (
                    <Meme memeData={meme} />
                )
            }
            )}
        </div>
        );
    }
}