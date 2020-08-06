import cors from 'cors'
import express from 'express'
import { routes } from './routes'

const app = express()
const port = process.env.port || 3333

// App should use cors
app.use(cors())
// Configure Express to use JSON as default body data
app.use(express.json())
// Add Routes to Application
app.use(routes)

// BASE_URL: http://localhost:3333/resources?parameters=value
app.listen(port, () => {
  console.log(`Running ${__filename} at PORT ${port} ...`)
})
