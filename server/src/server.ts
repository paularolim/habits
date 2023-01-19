import fastify from 'fastify'
import * as dotenv from 'dotenv'

dotenv.config()

const app = fastify()

const port = Number(process.env.PORT) || 3333

app.get('/', () => {
    return 'Hello world'
})

app.listen({ port }).then(() => {
    console.log(`Server running on port ${port}`)
}).catch((error) => {
    console.log('Error on listen server')
    console.error(error)
})