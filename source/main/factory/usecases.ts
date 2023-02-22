import { CreateShortenerUseCase } from "../../usecases/create-shortener-usecase";
import { inMemoryShortenerRepository } from "./repositories";

export const createShortenerUseCase = new CreateShortenerUseCase(inMemoryShortenerRepository)