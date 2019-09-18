import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import serveStatic from "serve-static";

import { initDatabase } from "./database/database";

import { ImageService } from "./services/imageService";
import { MemeService } from "./services/MemeService";
import { TemplateService } from "./services/templateService";

import { TemplateController } from "./controllers/templateController";
import { MemeController } from "./controllers/memeController";

import { createMemesRouter } from "./routers/memesRouter";
import { createTemplateRouter } from "./routers/templateRouter";

dotenv.config();

export function createServer() {
    const app = express();

    const imageService = new ImageService();
    const memeService = new MemeService();
    const templateService = new TemplateService();

    const memeController = new MemeController(imageService, memeService);
    const templateController = new TemplateController(imageService, templateService);

    initDatabase();

    app.use(cors());
    app.use(bodyParser.json());
    app.use("/img", serveStatic(path.join(__dirname, '../img')));

    app.use("/api/memes", createMemesRouter(memeController));
    app.use("/api/templates", createTemplateRouter(templateController));

    const port = process.env.PORT || 8085;

    return app.listen(port, () => {
        console.log(`listening on port: ${port}`);
    });
}
