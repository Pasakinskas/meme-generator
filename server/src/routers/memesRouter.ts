import express, { Request, Response } from "express";
import { MemeController } from "../controllers/memeController";
import { MemeDTO } from "../dataTransfer/MemeDTO";

export function createMemesRouter(memeController: MemeController) {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        const memes: MemeDTO[] = await memeController.getAllMemes();
        res.status(201).send(memes);
    })

    router.post("/", async (req: Request, res: Response) => {
        const meme: MemeDTO = await memeController.createMeme(req.body);
        res.status(201).send(meme);
    })

    return router;
}