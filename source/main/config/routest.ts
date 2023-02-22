import { Express, Router } from "express";
import setShortenerRoute from "../routes/shortener";

export function setRoutest(application: Express) {
    
    const router = Router()

    setShortenerRoute(router)

    application.use(router)

}