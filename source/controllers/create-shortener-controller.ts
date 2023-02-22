import { CreateShortenerUseCase } from "../usecases/create-shortener-usecase";
import { Request, Response } from "express";

export class CreateShortenerController {

    public readonly createShortenerUseCase: CreateShortenerUseCase

    constructor(createShortenerUseCase: CreateShortenerUseCase) {
        this.createShortenerUseCase = createShortenerUseCase
    }

    handle(request: Request, response: Response): Response | void {

        const { id, url } = request.body 

        const shortenerOrError = this.createShortenerUseCase.execute(id, url)

        if (shortenerOrError.isLeft()) 
            return response.status(400).json({
                message: shortenerOrError.value.message,
            })
        
        const shortener = shortenerOrError.value

        return response.status(200).json({
            id: shortener.id.value,
            url: shortener.url.value
        })

    }

}