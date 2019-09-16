import React, { Component } from 'react';
import TemplateSelector from '../../components/TemplateSelector/TemplateSelector';
import TemplateCustomizer from '../../components/TemplateCustomizer/TemplateCustomizer'
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
            selectedTemplate: null
        });
    }

    handleGenerateMeme = async (selectedTemplate, name, topText, bottomText) => {
        const memePrototype = await ApiService.generateMeme(selectedTemplate, name, topText, bottomText);
        console.log(memePrototype);
        return memePrototype;
    }

    render() {
        const { selectedTemplate } = this.state;

    return (
      <div>
          <TemplateSelector
                onSelect={this.handleSelectTemplate}
                onClear={this.handleClearTemplateSelection}
                selectedTemplate={selectedTemplate}
            />

            <TemplateCustomizer
                template={selectedTemplate}
                onCreateMeme={this.handleGenerateMeme}
            />
      </div>
    );
  }
}

export default MemeGenerator;