import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { createHelloRouter } from "./routers/hello";

dotenv.config();

export function createServer() {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    app.use("/api/hello", createHelloRouter());

    return app.listen(process.env.PORT || 8080, () => {
        console.log(`listening on port: ${process.env.PORT}`);
    });
}
