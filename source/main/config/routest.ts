import { Express, Router } from "express";

export function setRoutest(application: Express) {
    
    const router = Router()

    application.use(router)

}