import { setMiddlewares } from "./middlewares";
import { setRoutest } from "./routest";
import express from "express";

const application = express()

setMiddlewares(application)
setRoutest(application)

export default application