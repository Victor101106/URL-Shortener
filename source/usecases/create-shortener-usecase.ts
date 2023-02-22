import { InvalidId } from "../domain/errors/invalid-id"
import { InvalidURL } from "../domain/errors/invalid-url"
import { Shortener } from "../domain/shortener"
import { ShortenerRepository } from "../repositories/ports/shortener-repository"
import { Either, left, right } from "../shared/either"
import { ShortenerAlreadyExists } from "./errors/shortener-already-exists"

export class CreateShortenerUseCase {

    public readonly shortenerRepository: ShortenerRepository

    constructor(shortenerRepository: ShortenerRepository) {
        this.shortenerRepository = shortenerRepository
    }

    execute(id: string, url: string): Either<InvalidId | InvalidURL | ShortenerAlreadyExists, Shortener> {

        const shortenerOrUndefined = this.shortenerRepository.get(id)

        if (shortenerOrUndefined)
            return left(new ShortenerAlreadyExists(id))

        const shortenerOrError = Shortener.create(id, url)

        if (shortenerOrError.isLeft()) 
            return left(shortenerOrError.value)

        const shortener = shortenerOrError.value

        this.shortenerRepository.save(shortener)

        return right(shortener)

    }

}