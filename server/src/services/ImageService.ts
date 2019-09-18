import Jimp from 'jimp';
import cuid from 'cuid';

export interface ImageDimensions {
    width: number,
    height: number,
}

export class ImageService {
    private async copyImage(uri: string): Promise<string> {
        const generatedFilename = cuid();
        const IMG_DIRECTORY = `./img/${generatedFilename}.jpg`;
        const imageData = await Jimp.read(uri);

        await imageData.clone().write(IMG_DIRECTORY);
        return generatedFilename;
    }

    async getImageDimentionsByUrl(imgUri: string): Promise<ImageDimensions> {
        const image = await Jimp.read(imgUri);
        return {
            width: image.bitmap.width,
            height: image.bitmap.height
        }
    }

    async writeText(image: any, text: string, x: number,
            y: number, imageWidth: number, imageHeight: number) {
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        return image.print(
            font,
            x,
            y,
            {
                text: text,
                alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER
            },
            imageWidth,
            imageHeight
        );
    }

    async getCopy(imageUri: string) {
        const copyFilename = await this.copyImage(imageUri);
        const copy = await this.getImage(copyFilename);

        return {
            filename: copyFilename,
            image: copy
        }
    }

    async saveImage(image: any, filename: string) {
        await image.quality(100).write(`./img/${filename}.jpg`);
    }

    async getImage(filename: string) {
        return Jimp.read(`./img/${filename}.jpg`);
    }
}