import express, { Request, Response } from "express";
import { TemplateController } from "../controllers/templateController";
import { TemplateDTO } from "../dataTransfer/TemplateDTO";

export function createTemplateRouter(templateController: TemplateController) {

    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        const templates: TemplateDTO[] = await templateController.getAllTemplates();
        templates ? res.status(200).send(templates) : res.sendStatus(500);
    })

    router.post("/", async (req: Request, res: Response) => {
        const template: TemplateDTO = await templateController.createNewTemplate(req.body);
        template ? res.status(201).send(template) : res.sendStatus(400);
    })

    return router;
}
