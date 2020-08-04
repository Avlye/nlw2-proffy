import express from "express"

const app = express()

// GET /users
app.get('/users', (request, response) => {
  response.send('Hellllo Amigo!!!!')
})

// http://localhost:3333
app.listen(3333, () => console.log("Server running ..."))
