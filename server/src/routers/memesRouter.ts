import express, { Request, Response } from "express";
import { MemeController } from "../controllers/memeController";

export function createMemesRouter(memeController: MemeController) {
    const router = express.Router();

    router.post("/", (req: Request, res: Response) => {
        console.log("body");
        console.log(req.body);
        const meme = memeController.createMeme(req.body);
        res.status(201).send({meme});
    })

    return router;
}