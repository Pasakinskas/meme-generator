import express, { Request, Response } from "express";
import { TemplateController } from "../controllers/templateController";
import { TemplateDTO } from "../dataTransfer/TemplateDTO";

export function createTemplateRouter(templateController: TemplateController) {

    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        try {
            const templates: TemplateDTO[] = await templateController.getAllTemplates();
            res.status(200).send(templates);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    });

    router.post("/", async (req: Request, res: Response) => {
        try {
            const { uri, name } = req.body;
            const template: TemplateDTO = await templateController.createNewTemplate(uri, name);
            if (template) {
                res.status(201).send(template);
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
