import { ShortenerRepository } from "../repositories/ports/shortener-repository"
import { Either, left, right } from "../shared/either"

export class DeleteShortenerUseCase {

    public readonly shortenerRepository: ShortenerRepository

    constructor(shortenerRepository: ShortenerRepository) {
        this.shortenerRepository = shortenerRepository
    }

    execute(id: string): void {
        this.shortenerRepository.delete(id)
    }

}