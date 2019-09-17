import express, { Request, Response } from "express";
import { TemplateController } from "../controllers/templateController";
import { TemplateDTO } from "../dataTransfer/TemplateDTO";

export function createTemplateRouter(templateController: TemplateController) {

    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        const templates: TemplateDTO[] = await templateController.getAllTemplates();
        res.send(templates);
    })

    router.post("/", async (req: Request, res: Response) => {
        const template: TemplateDTO = await templateController.createNewTemplate(req.body);
        res.status(201).send(template);
    })

    return router;
}
