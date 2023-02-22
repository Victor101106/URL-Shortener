import { Shortener } from "../../domain/shortener";

export interface ShortenerRepository {
    save(shortener: Shortener): Shortener
    get(id: string): Shortener | void
    delete(id: string): void
}