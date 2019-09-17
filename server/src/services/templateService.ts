import { TemplateModel } from "../models/templateModel";
import { ImageService } from "./ImageService";

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

    async saveTemplateWithoutDimentions(name: string, uri: string) {
        const imageService: ImageService = new ImageService();
        const { width, height } = await imageService.getImageDimentionsByUrl(uri);
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