import { FastifyInstance } from "fastify";
import cors from '@fastify/cors'

export function setupMiddlewares(app: FastifyInstance) {
    app.register(cors)
}