import Jimp from 'jimp';
import cuid from 'cuid';

export class ImageService {
    private async copyImage(uri: string) {
        const generatedFilename = cuid();
        const IMG_DIRECTORY = `./img/${generatedFilename}.jpg`;
        const imageData = await Jimp.read(uri);

        await imageData.clone().write(IMG_DIRECTORY);
        return generatedFilename;
    }

    async writeText(image, text: string, x, y, imageWidth, imageHeight) {
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        return await image.print(
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

    async saveImage(image, filename: string) {
        await image.quality(100).write(`./img/${filename}.jpg`);
    }

    async getImage(filename: string) {
        return await Jimp.read(`./img/${filename}.jpg`);
    }
}