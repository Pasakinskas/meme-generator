import React, { Component } from 'react';

import Meme from "../Meme/Meme";
import ApiService from '../../ApiService';

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
            "Show other users creations"
            : "Hide other users creations"
        return (
        <div>
            <h1>Memes created by other Users</h1>
            <button onClick={this.toggleMemeFeed}>{buttonText}</button>
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