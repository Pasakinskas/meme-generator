import React, { Component } from 'react';

import TemplateSelector from '../../components/TemplateSelector/TemplateSelector';
import TemplateCustomizer from '../../components/TemplateCustomizer/TemplateCustomizer'
import Meme from "../../components/Meme/Meme";
import ApiService from "../../ApiService";

class MemeGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTemplate: null,
            generatedMeme: null
        }
    }

    handleSelectTemplate = (template) => {
        this.setState({
            selectedTemplate: template
        })
    }

    handleClearTemplateSelection = () => {
        this.setState({
            selectedTemplate: null,
            generatedMeme: null
        });
    }

    handleGenerateMeme = async (selectedTemplate, name, topText, bottomText) => {
        const meme = await ApiService.generateMeme(selectedTemplate, name, topText, bottomText);
        this.setState({
            generatedMeme: meme
        });
    }

    render() {
        const { selectedTemplate, generatedMeme } = this.state;

    return (
      <div>
        {generatedMeme &&
            <Meme memeData = {generatedMeme}/>
        }
        {!generatedMeme &&
            <TemplateCustomizer
                template={selectedTemplate}
                onCreateMeme={this.handleGenerateMeme}
            />}
            <TemplateSelector
                onSelect={this.handleSelectTemplate}
                onClear={this.handleClearTemplateSelection}
                selectedTemplate={selectedTemplate}
            />
      </div>
    );
  }
}

export default MemeGenerator;