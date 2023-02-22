export class ShortenerAlreadyExists extends Error {
    constructor(id: string) {
        super(`The shortener "${id}" already exists.`)
        this.name = 'ShortenerAlreadyExists'
    }
}