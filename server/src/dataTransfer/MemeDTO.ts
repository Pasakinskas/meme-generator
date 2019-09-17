import { Meme } from "../models/memeModel";

export interface MemeDTO {
    title: string;
    uri: string;
    width: number;
    height: number;
    mongoId: string;
}

export function buildMemeDTO(meme: Meme): MemeDTO {
    const uri = _buildMemeUri(meme.filename);
    return  {
        title: meme.title,
        uri,
        width: meme.width,
        height: meme.height,
        mongoId: meme._id
    }
}

function _buildMemeUri(filename: string) {
    const apiURL = process.env.API_IMG_URL || "http://localhost:8085/img/";
    return apiURL + filename + ".jpg";
}

