import React, { Component } from 'react';
import MemeTemplate from "../MemeTemplate/MemeTemplate";

export default class TemplateCustomizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            topText: "",
            bottomText: "",
        }
    }

    handleTopTextChange = (evt) => {
        this.setState({
            topText: evt.target.value
        });
    }

    handleBotTextChange = (evt) => {
        this.setState({
            bottomText: evt.target.value
        });
    }

    handleNameTextChange = (evt) => {
        this.setState({
            name: evt.target.value
        });
    }

    render() {
        const { template } = this.props;
        return (
        <div>
            {template && <MemeTemplate template={template}/>}

            {template && <form onSubmit={(e) => {this.generateMeme(e)}}>
                <input
                    placeholder="meme name"
                    onChange={this.handleNameTextChange} />
                <input
                    placeholder="top text"
                    onChange={this.handleTopTextChange} />
                <input
                    placeholder="bottom text"
                    onChange={this.handleBotTextChange} />
                <button type="submit">generate!</button>
            </form>}
        </div>
        );
    }

    generateMeme = (e) => {
        e.preventDefault();
        const { topText, bottomText, name } = this.state;
        const { template } = this.props;

        this.props.onCreateMeme(template, name, topText, bottomText);
    }
}