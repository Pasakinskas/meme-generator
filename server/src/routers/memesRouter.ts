import express, { Request, Response } from "express";
import { MemeController, MemeOptions } from "../controllers/memeController";
import { MemeDTO } from "../dataTransfer/MemeDTO";

export function createMemesRouter(memeController: MemeController) {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        try {
            const memes: MemeDTO[] = await memeController.getAllMemes();
            res.status(200).send(memes);
        } catch (e) {
            res.sendStatus(500);
        }
    });

    router.post("/", async (req: Request, res: Response) => {
        const body = req.body;
        const template = body.template;
        const memeOptions: MemeOptions = {
            topText: body.topText,
            bottomText: body.bottomText,
            name: body.name,
            template: {
                width: template.width,
                height: template.height,
                url: template.url,
            },
        };
        try {
            const meme: MemeDTO = await memeController.createMeme(memeOptions);
            if (meme) {
                res.status(201).send(meme);
            } else {
                res.sendStatus(400);
            }
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    });

    return router;
}