import express, { Request, Response } from "express";
import { MemeController } from "../controllers/memeController";
import { MemeDTO } from "../dataTransfer/MemeDTO";

export function createMemesRouter(memeController: MemeController) {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        const memes: MemeDTO[] = await memeController.getAllMemes();
        memes ? res.status(200).send(memes) : res.sendStatus(500);
    })

    router.post("/", async (req: Request, res: Response) => {
        const meme: MemeDTO = await memeController.createMeme(req.body);
        meme ? res.status(201).send(meme) : res.sendStatus(400);
    })

    return router;
}