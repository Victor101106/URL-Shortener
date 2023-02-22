import { createShortenerController, deleteShortenerController, getShortenerController } from "../factory/controllers";
import { Request, Response, Router } from "express";

export default (router: Router) => {
    
    router.post('/', (request: Request, response: Response) => {
        return createShortenerController.handle(request, response)
    })

    router.get('/:id', (request: Request, response: Response) => {
        return getShortenerController.handle(request, response)
    })

    router.delete('/:id', (request: Request, response: Response) => {
        return deleteShortenerController.handle(request, response)
    })

}