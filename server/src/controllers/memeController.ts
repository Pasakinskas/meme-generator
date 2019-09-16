import { ImageService } from "../services/ImageService";

export class MemeController {
    async createMeme(options: any) {
       const imageService = new ImageService();
       const uri = options.template.url;

       const memeData = await imageService.getMemeTemplateCopy(uri);
       return await imageService.writeText(memeData);
    }
}