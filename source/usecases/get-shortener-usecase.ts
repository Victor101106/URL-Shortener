import { Shortener } from "../domain/shortener";
import { ShortenerRepository } from "../repositories/ports/shortener-repository";

export class GetShortenerUseCase {

    public readonly shortenerRepository: ShortenerRepository

    constructor(shortenerRepository: ShortenerRepository) {
        this.shortenerRepository = shortenerRepository
    }

    execute(id: string): Shortener | void {
        return this.shortenerRepository.get(id)
    }

}