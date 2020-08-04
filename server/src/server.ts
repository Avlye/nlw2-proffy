import cors from 'cors'
import express from 'express'
import { routes } from './routes'

const app = express()

// App should use cors
app.use(cors())
// Configure Express to use JSON as default body data
app.use(express.json())
// Add Routes to Application
app.use(routes)

// BASE_URL: http://localhost:3333/resources?parameters=value
app.listen(3333, () => console.log('Server running ...'))
