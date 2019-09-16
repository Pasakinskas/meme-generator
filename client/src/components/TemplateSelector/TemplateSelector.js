import React, { Component } from 'react';

import MemeTemplate from "../MemeTemplate/MemeTemplate";
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
                <button className="btn-return" onClick={onClear}>
                    Choose different template
                </button>
            }
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
        );
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
        //const templates = await ApiService.getTemplates();
        const templates = []
        this.setState({
            templates
        });
    }
}