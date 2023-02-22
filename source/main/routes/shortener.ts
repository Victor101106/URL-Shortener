import { createShortenerController } from "../factory/controllers";
import { Request, Response, Router } from "express";

export default (router: Router) => {
    
    router.post('/s', (request: Request, response: Response) => {
        return createShortenerController.handle(request, response)
    })

}