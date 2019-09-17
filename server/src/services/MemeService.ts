import { ImageService } from "../services/ImageService";
import { MemeModel, Meme } from "../models/memeModel";

export class MemeService {

    async generateMeme(template, width, height, topText, bottomText) {
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
        return await MemeModel.find();
    }

    saveMeme(title: string, filename: string, width: string, height: string) {
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