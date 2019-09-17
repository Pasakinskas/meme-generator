import { TemplateModel, Template } from "../models/templateModel";
import { ImageService } from "../services/ImageService";
import { TemplateService } from "../services/templateService";
import { TemplateDTO, buildTemplateDTO } from "../dataTransfer/TemplateDTO";


export class TemplateController {

    private imageService: ImageService;
    private templateService: TemplateService;

    constructor(imageService: ImageService, templateService: TemplateService) {
        this.imageService = imageService;
        this.templateService = templateService;
    }

    async getAllTemplates(): Promise<TemplateDTO[]> {
        const templates: Template[] = await TemplateModel.find();
        return templates.map(template => buildTemplateDTO(template))

    }

    async createNewTemplate(options: any): Promise<TemplateDTO> {
        const { uri, name } = options;

        const imageDimentions = await this.imageService.getImageDimentionsByUrl(uri);
        console.log(name);

        const template: Template = await this.templateService.saveTemplate(
            name,
            uri,
            imageDimentions.width,
            imageDimentions.height
        );

        return buildTemplateDTO(template);
    }
}