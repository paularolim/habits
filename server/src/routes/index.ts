import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"

export async function setupRoutes(app: FastifyInstance) {
    app.get('/habits', async () => {
        const habits = await prisma.habit.findMany()
        return habits
    })
}