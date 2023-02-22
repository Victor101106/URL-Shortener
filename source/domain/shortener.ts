import { Either, left, right } from "../shared/either";
import { InvalidId } from "./errors/invalid-id";
import { InvalidURL } from "./errors/invalid-url";
import { URL } from "./url";
import { Id } from "./id";

export class Shortener {

    public readonly url: URL
    public readonly id: Id

    private constructor(id: Id, url: URL) {
        this.url = url
        this.id = id
        Object.freeze(this)
    }

    static create(id: string, url: string) : Either<InvalidId | InvalidURL, Shortener>{
        
        const urlOrError = URL.create(url)
        const idOrError = Id.create(id)

        if (urlOrError.isLeft())
            return left(urlOrError.value)

        if (idOrError.isLeft())
            return left(idOrError.value)
        
        return right(new Shortener(idOrError.value, urlOrError.value))

    }

}