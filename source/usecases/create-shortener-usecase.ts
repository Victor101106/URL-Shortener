import { InvalidId } from "../domain/errors/invalid-id"
import { InvalidURL } from "../domain/errors/invalid-url"
import { Shortener } from "../domain/shortener"
import { ShortenerRepository } from "../repositories/ports/shortener-repository"
import { Either, left, right } from "../shared/either"

export class CreateShortenerUseCase {

    public readonly shortenerRepository: ShortenerRepository

    constructor(shortenerRepository: ShortenerRepository) {
        this.shortenerRepository = shortenerRepository
    }

    execute(id: string, url: string): Either<InvalidId | InvalidURL, Shortener> {

        const shortenerOrError = Shortener.create(id, url)

        if (shortenerOrError.isLeft()) 
            return left(shortenerOrError.value)

        const shortener = shortenerOrError.value

        this.shortenerRepository.save(shortener)

        return right(shortener)

    }

}