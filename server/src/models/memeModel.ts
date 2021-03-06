import mongoose from "mongoose";

export interface Meme extends mongoose.Document {
    title: string;
    filename: string;
    width: number;
    height: number;
}

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
});

export const MemeModel = mongoose.model<Meme>('Meme', schema);
