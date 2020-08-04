import express from "express"

const app = express()

// GET /users
app.get('/users', (request, response) => {
  const users = [
    { name: 'Diego', age: 25 },
    { name: 'Vini', age: 21 }
  ]

  return response.json(users)
})

// BASE_URL: http://localhost:3333/resources?parameters=value
app.listen(3333, () => console.log("Server running ..."))
