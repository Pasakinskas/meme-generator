import mongoose from "mongoose";

export interface Template extends mongoose.Document {
    name: string;
    uri: string;
    width: number;
    height: number;
}

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uri: {
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

export const TemplateModel = mongoose.model<Template>('Template', schema);
