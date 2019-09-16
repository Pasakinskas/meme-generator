import express, { Request, Response } from "express";
import { TemplateController } from "../controllers/templateController";

export function createTemplateRouter() {
    const router = express.Router();
    const templateController = new TemplateController();

    router.get("/", (req: Request, res: Response) => {
        const templates = templateController.getAllTemplates();
        res.send(templates);
    })

    router.post("/", (req: Request, res: Response) => {
        const template = templateController.createNewTemplate(req.body);
        res.status(201).send(template);
    })

    return router;
}
