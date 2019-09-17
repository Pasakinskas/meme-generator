import React, { Component } from 'react';

import MemeTemplate from "../MemeTemplate/MemeTemplate";
import TemplateCreator from "../TemplateCreator/TemplateCreator";
import ApiService from "../../ApiService";
import "./TemplateSelector.css"

export default class TemplateSelector extends Component {
    constructor(props) {
        super(props);
        this.clearTemplateSelection = this.clearTemplateSelection.bind(this);

        this.state = {
            templates: []
        }
    }

    render() {
        const { onSelect, onClear, selectedTemplate } = this.props;
        return (
        <div>
            {selectedTemplate &&
                <button className="btn btn-info btn-return" onClick={onClear}>
                    Back to template selection
                </button>
            }
            {!selectedTemplate &&
                <TemplateCreator onCreate={() => this.refreshTemplates()}/>
            }
            <div className="template-list-container">
                {!selectedTemplate &&
                    this.state.templates.map((template) => {
                        return (
                            <MemeTemplate
                                template={template}
                                handleClick={() => { onSelect(template)}}
                            />
                        )
                    }
                )}
            </div>
        </div>
        );
    }

    refreshTemplates() {
        this.clearTemplateSelection();
        this.getMemeTemplates();
    }

    clearTemplateSelection() {
        this.setState({
            selectedTemplate: null
        });
    }

    setSelectedTemplate(template) {
        this.setState({
            selectedTemplate: template
        });
    }

     componentDidMount() {
        this.getMemeTemplates();
    }

    async getMemeTemplates() {
        // const publicTemplates = [];
        const publicTemplates = await ApiService.getPublicTemplates();
        const templates = await ApiService.getTemplates();

        this.setState({
            templates: templates.concat(publicTemplates)
        });
    }
}