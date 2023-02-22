import { Shortener } from "../../domain/shortener";
import { ShortenerRepository } from "../ports/shortener-repository";

export class InMemoryShortenerRepository implements ShortenerRepository {

    private database: Shortener[] = new Array

    save(shortener: Shortener): Shortener {
        this.database.push(shortener)
        return shortener
    }

    delete(id: string): void {
        const index = this.database.findIndex(value => value.id.value == id)
        this.database.splice(index, 1)
    }

    get(id: string): Shortener | void {
        return this.database.find(value => id == value.id.value)
    }

}