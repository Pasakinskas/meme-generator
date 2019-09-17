import { Template } from "../models/templateModel";

export interface TemplateDTO {
    name: string;
    url: string;
    width: number;
    height: number;
    mongoId: string;
}

export function buildTemplateDTO(template: Template): TemplateDTO {
    return  {
        name: template.name,
        url: template.uri,
        width: template.width,
        height: template.height,
        mongoId: template._id
    }
}

