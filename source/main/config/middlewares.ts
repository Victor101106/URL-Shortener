import bodyParser from "../middles/body-parser";
import { Express } from "express";

export function setMiddlewares(application: Express) {
    application.use(bodyParser)
}