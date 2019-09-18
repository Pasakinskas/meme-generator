import { ImageService } from "./imageService";
import { MemeModel, Meme } from "../models/memeModel";

export class MemeService {

    async generateMeme(template: any, width: number,
            height: number, topText: string, bottomText: string): Promise<any> {

        const imageService = new ImageService();
        const y = height - 40;

        const imageWithTopText = await imageService.writeText(
            template, topText, 0 , 1, width, height
        );
        const imageWithBothTexts = await imageService.writeText(
            template, bottomText, 0 , y, width, height
        );
        return imageWithBothTexts;
    }

    async getAllMemes(): Promise<Meme[]> {
        return MemeModel.find();
    }

    saveMeme(title: string, filename: string, width: number, height: number): Promise<Meme> {
        const templateModel = new MemeModel({
            title,
            filename,
            width,
            height
        });

        templateModel.validate();
        return templateModel.save();
    }
}