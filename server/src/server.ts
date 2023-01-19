import fastify from 'fastify'
import * as dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const app = fastify()

const prisma = new PrismaClient()

const port = Number(process.env.PORT) || 3333

app.get('/habits', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})

app.listen({ port }).then(() => {
    console.log(`Server running on port ${port}`)
}).catch((error) => {
    console.log('Error on listen server')
    console.error(error)
})