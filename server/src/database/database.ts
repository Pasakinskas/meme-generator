import mongoose from "mongoose";

export function initDatabase() {
    const dbURI: string = process.env.DATABASE ||
    "mongodb://localhost:27017/memegenerator";

    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
        }
    );
}
