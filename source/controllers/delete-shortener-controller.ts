import { Request, Response } from "express";
import { DeleteShortenerUseCase } from "../usecases/delete-shortener-usecase";

export class DeleteShortenerController {

    public readonly deleteShortenerUseCase: DeleteShortenerUseCase

    constructor(deleteShortenerUseCase: DeleteShortenerUseCase) {
        this.deleteShortenerUseCase = deleteShortenerUseCase
    }

    handle(request: Request, response: Response): Response {

        const { id } = request.params

        this.deleteShortenerUseCase.execute(id)

        return response.status(200).send('')

    }

}