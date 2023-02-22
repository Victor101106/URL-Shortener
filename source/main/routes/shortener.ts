import { createShortenerController, deleteShortenerController } from "../factory/controllers";
import { Request, Response, Router } from "express";

export default (router: Router) => {
    
    router.post('/s', (request: Request, response: Response) => {
        return createShortenerController.handle(request, response)
    })

    router.delete('/s/:id', (request: Request, response: Response) => {
        return deleteShortenerController.handle(request, response)
    })

}