import React, { Component } from 'react';
import TemplateSelector from '../../components/TemplateSelector/TemplateSelector';
import TemplateCustomizer from '../../components/TemplateCustomizer/TemplateCustomizer'

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

    handleGenerateMeme = (selectedTemplate, topText, bottomText) => {
        // ApiService -> POST -> returns <Meme />
        console.log(selectedTemplate, topText, bottomText);

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