import express, { Request, Response } from "express";
import { MemeController } from "../controllers/memeController";
import { MemeDTO, buildMemeDTO } from "../dataTransfer/MemeDTO";

export function createMemesRouter(memeController: MemeController) {
    const router = express.Router();

    router.post("/", async (req: Request, res: Response) => {
        const meme = await memeController.createMeme(req.body);
        const memeDTO: MemeDTO = buildMemeDTO(meme);

        res.status(201).send(memeDTO);
    })

    return router;
}