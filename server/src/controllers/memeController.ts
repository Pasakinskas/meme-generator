import { MemeService } from "../services/MemeService";
import { ImageService } from "../services/ImageService";

export class MemeController {
    async createMeme(options: any) {

       const memeService = new MemeService();
       const imageService = new ImageService();

       const {width, height, url } = options.template;
       const { topText, bottomText, name } = options;

       const { image, filename } = await imageService.getCopy(url);
       const meme = await memeService.generateMeme(
            image,
            width,
            height,
            topText,
            bottomText,
        );

        imageService.saveImage(meme, filename);
        return await memeService.saveMeme(name, filename, width, height);
    }
}