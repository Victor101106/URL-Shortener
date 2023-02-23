import { CreateShortenerUseCase } from "../../usecases/create-shortener-usecase";
import { DeleteShortenerUseCase } from "../../usecases/delete-shortener-usecase";
import { GetShortenerUseCase } from "../../usecases/get-shortener-usecase";
import { inMemoryShortenerRepository } from "./repositories";
import { cryptoIdService } from "./services";

export const createShortenerUseCase = new CreateShortenerUseCase(inMemoryShortenerRepository, cryptoIdService)
export const deleteShortenerUseCase = new DeleteShortenerUseCase(inMemoryShortenerRepository)
export const getShortenerUseCase = new GetShortenerUseCase(inMemoryShortenerRepository)