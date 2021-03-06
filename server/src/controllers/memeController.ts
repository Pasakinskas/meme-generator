import { MemeService } from "../services/memeService";
import { ImageService } from "../services/imageService";
import { Meme } from "../models/memeModel";
import { MemeDTO, buildMemeDTO } from "../dataTransfer/MemeDTO";

export interface MemeOptions {
    topText: string,
    bottomText: string,
    name: string,
    template: {
        width: number,
        height: number,
        url: string,
    },
}

export class MemeController {

    private imageService: ImageService;
    private memeService: MemeService;

    constructor(imageService: ImageService, memeService: MemeService) {
        this.imageService = imageService;
        this.memeService = memeService;
    }

    async createMeme(options: MemeOptions): Promise<MemeDTO> {
       const { width, height, url } = options.template;
       const { topText, bottomText, name } = options;

       const { image, filename } = await this.imageService.getCopy(url);

       const meme: Promise<any> = await this.memeService.generateMeme(
            image,
            width,
            height,
            topText,
            bottomText,
        );

        await this.imageService.saveImage(meme, filename);
        const savedMeme: Meme = await this.memeService.saveMeme(name, filename, width, height);
        return buildMemeDTO(savedMeme);
    }

    async getAllMemes(): Promise<MemeDTO[]> {
        const memes: Meme[] = await this.memeService.getAllMemes();
        return memes.map(meme => buildMemeDTO(meme));
    }
}