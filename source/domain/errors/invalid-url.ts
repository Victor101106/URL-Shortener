export class InvalidURL extends Error {
    constructor(url: string) {
        super(`The url "${url}" is invalid.`)
        this.name = 'InvalidURL'
    }
}