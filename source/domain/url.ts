import { Either, left, right } from "../shared/either"
import { InvalidURL } from "./errors/invalid-url"

export class URL {

    public readonly value: string

    private constructor(id: string) {
        this.value = id
        Object.freeze(this)
    }

    static create(value: string): Either<InvalidURL, URL> {
        if (!this.validateURL(value)) {
            return left(new InvalidURL(value))
        }
        return right(new URL(value))
    }

    static validateURL(url: string): boolean {
        const expression = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
        return expression.test(url)
    }

}