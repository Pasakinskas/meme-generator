import { TemplateModel } from "../models/templateModel";

export class TemplateService {

    saveTemplate(name: string, uri: string, width: number, height: number) {
        const templateModel = new TemplateModel({
            name,
            uri,
            width,
            height
        });

        templateModel.validate();
        return templateModel.save();
    }
}