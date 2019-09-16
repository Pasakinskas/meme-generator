import { TemplateModel, Template } from "../models/templateModel";

export class TemplateController {
    async getAllTemplates(): Promise<Template[]> {
        return TemplateModel.find();
    }

    createNewTemplate(template: any) {}
}