import React, { Component } from 'react';

import MemeTemplate from "../MemeTemplate/MemeTemplate";
import ApiService from "../../ApiService";
import "./TemplateCreator.css";

export default class TemplateCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            uri: ""
        }
    }

    handleTitleChange = (evt) => {
        this.setState({
            title: evt.target.value
        });
    }

    handleUriCHange = (evt) => {
        this.setState({
            uri: evt.target.value
        });
    }

    createTemplate = async (e) => {
        e.preventDefault()
        const { title, uri } = this.state;
        await ApiService.createTemplate(title, uri);
        this.props.onCreate();
    }

    render() {
        return (
        <div>
            <h3>Create Your own template!</h3>
            <p>If you don't find our template selection satisfying, use this form to create your own</p>
            <form onSubmit={(e) => {this.createTemplate(e)}}>
                <input
                    className="creator-input"
                    placeholder="template title"
                    onChange={this.handleTitleChange} />
                <input
                    className="creator-input"
                    placeholder="template url"
                    onChange={this.handleUriCHange} />
                <button type="submit" className="bth-create btn btn-info">create!</button>
            </form>
        </div>
        );
    }
}