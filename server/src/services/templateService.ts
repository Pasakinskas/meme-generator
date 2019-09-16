import { TemplateModel } from "../models/templateModel";

export class TemplateService {

    createNewTemplate(name: string, uri: string) {
        const templateModel = new TemplateModel({
            name,
            uri
        });

        templateModel.validate();
        return templateModel.save();
    }
}