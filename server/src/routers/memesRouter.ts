import express, { Request, Response } from "express";
import { MemeController } from "../controllers/memeController";

export function createMemesRouter(memeController: MemeController) {
    const router = express.Router();

    router.post("/", async (req: Request, res: Response) => {
        const meme = await memeController.createMeme(req.body);
        res.status(201).send(meme);
    })

    return router;
}