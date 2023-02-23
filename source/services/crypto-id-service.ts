import { IdService } from "./ports/id-service";
import crypto from 'crypto'

export class CryptoIdService implements IdService {
    randomString(lenght: number): string {
        return crypto.randomBytes(lenght / 2).toString('hex')
    }
}