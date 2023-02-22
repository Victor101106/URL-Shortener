import { Either, left, right } from "../shared/either"
import { InvalidId } from "./errors/invalid-id"

export class Id {

    public readonly value: string

    private constructor(id: string) {
        this.value = id
        Object.freeze(this)
    }

    static create(value: string): Either<InvalidId, Id> {
        if (!this.validateId(value)) {
            return left(new InvalidId(value))
        }
        return right(new Id(value))
    }

    static validateId(id: string): boolean {
        return id.trim().length >= 2
    }

}