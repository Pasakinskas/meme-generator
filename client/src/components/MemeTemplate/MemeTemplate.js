import React, { Component } from 'react';
import "./MemeTemplate.css"

export default class MemeTemplate extends Component {

    render() {
        const { template, handleClick } = this.props;

        return (
            <img
            className="img-template"
            key={template.id}
            src={template.url}
            alt={template.name}
            onClick={handleClick}
        />
        )
    }
}