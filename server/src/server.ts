import * as dotenv from 'dotenv'
import { app } from './app'

dotenv.config()

const port = Number(process.env.PORT) || 3333

app.listen({ port }).then(() => {
    console.log(`Server running on port ${port}`)
}).catch((error) => {
    console.log('Error on listen server')
    console.error(error)
})