import { CreateShortenerUseCase } from "../usecases/create-shortener-usecase";
import { Request, Response } from "express";

export class CreateShortenerController {

    public readonly createShortenerUseCase: CreateShortenerUseCase

    constructor(createShortenerUseCase: CreateShortenerUseCase) {
        this.createShortenerUseCase = createShortenerUseCase
    }

    handle(request: Request, response: Response): Response | void {

        const { url } = request.body

        const shortenerOrError = this.createShortenerUseCase.execute(url)

        if (shortenerOrError.isLeft()) 
            return response.status(400).json({
                message: shortenerOrError.value.message,
            })
        
        const baseURL = request.protocol + '://' + request.get('host') + request.originalUrl
        const shortener = shortenerOrError.value

        return response.status(200).json({
            id: shortener.id.value,
            url: baseURL + shortener.id.value + '/'
        })

    }

}