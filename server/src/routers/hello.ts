import express, { Request, Response } from "express";

export function createHelloRouter() {
    const router = express.Router();

    router.get("/", (req: Request, res: Response) => {
        res.send({message: "Hello World!"});
    })

    return router;
}
