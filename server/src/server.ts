import express from "express"

const app = express()

// Configure Express to use JSON as default body data
app.use(express.json())

// GET: Request a resource information
// POST: Create new information in a resource
// PUT: Re-created with a new info (Update) a new information in a resource
// DELETE: Destroy a information in a resource.

// GET /users
app.get('/users', (request, response) => {
  const users = [
    { name: 'Diego', age: 25 },
    { name: 'Vini', age: 21 }
  ]

  return response.json(users)
})

// POST /users
app.post('/users', (request, response) => {
  const users = [
    { name: 'Diego', age: 25 },
    { name: 'Vini', age: 21 }
  ]

  const { name, age } = request.body
  const user = { name, age }

  return response.json([...users, user])
})

// BASE_URL: http://localhost:3333/resources?parameters=value
app.listen(3333, () => console.log("Server running ..."))
