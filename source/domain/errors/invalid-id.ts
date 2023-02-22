export class InvalidId extends Error {
    constructor(id: string) {
        super(`The id "${id}" is invalid.`)
        this.name = 'InvalidId'
    }
}