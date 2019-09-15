import React, { Component } from 'react';
import ApiService from "../../ApiService";
import "./TemplateSelector.css"

export default class TemplateSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            templates: [],
            selectedTemplate: null
        }
    }

    render() {
        const { selectedTemplate } = this.state;
        return (
        <div>
            {selectedTemplate &&
                <button className="btn-return" onClick={this.clearTemplateSelection()}>
                    Choose different template
                </button>
            }
            {!selectedTemplate &&
                this.state.templates.map(template => {
                    return (
                    <img
                        className="template-img"
                        key={template.id}
                        src={template.url}
                        alt={template.name}
                        onClick={() => {
                            this.setSelectedTemplate(template);
                        }}
                    />
                    )
                })}
        </div>
        );
    }

    clearTemplateSelection() {

    }

    setSelectedTemplate(template) {
        this.setState({
            selectedTemplate: template
        });
    }

     componentDidMount() {
         this.getMemeTemplates()
    }

    async getMemeTemplates() {
        const templates = await ApiService.getTemplates();
        //const templates = []
        this.setState({
            templates
        });
    }
}