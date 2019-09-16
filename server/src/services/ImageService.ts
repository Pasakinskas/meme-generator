import Jimp from 'jimp';
import cuid from 'cuid';

export class ImageService {
    async getMemeTemplateCopy(uri: string) {
        const generatedFilename = cuid();
        const imgActive = `./img/active/${generatedFilename}.png`;
        const imageData = await Jimp.read(uri);
        imageData.clone().write(imgActive);

        const copiedImageData = await Jimp.read(imgActive);

        return {
            data: copiedImageData,
            filename: generatedFilename
        }
    }

    async writeText(memeData) {
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        const { data, filename } = memeData;

        await data.print(font, 20, 50, {
            text: "This is a test meme. Half baked",
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
        },
        200,
        200)

        await data.quality(10).write(`./img/exported/${filename}.png`);
    }
}