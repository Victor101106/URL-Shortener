import { GetShortenerUseCase } from "../usecases/get-shortener-usecase";
import { Request, Response } from "express";

export class GetShortenerController {

    public readonly getShortenerUseCase: GetShortenerUseCase

    constructor(getShortenerUseCase: GetShortenerUseCase) {
        this.getShortenerUseCase = getShortenerUseCase
    }

    handle(request: Request, response: Response): Response | void {
        
        const { id } = request.params

        const shortenerOrVoid = this.getShortenerUseCase.execute('' + id)

        if (!shortenerOrVoid) 
            return response.status(404).send('Page not found.')
        
        const shortener = shortenerOrVoid

        return response.redirect(shortener.url.value)

    }

}