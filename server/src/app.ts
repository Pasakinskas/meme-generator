import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import serveStatic from "serve-static";

import { initDatabase } from "./database/database";
import { createMemesRouter } from "./routers/memesRouter";
import { MemeController } from "./controllers/memeController";

dotenv.config();

export function createServer() {
    const app = express();
    const memeController = new MemeController();

    initDatabase();

    app.use(cors());
    app.use(bodyParser.json());
    app.use("/img", serveStatic(path.join(__dirname, '../img')));

    app.use("/api/memes", createMemesRouter(memeController));

    return app.listen(process.env.PORT || 8080, () => {
        console.log(`listening on port: ${process.env.PORT}`);
    });
}
