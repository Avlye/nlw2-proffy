import express from 'express'
import { ClassesController } from './controllers/ClassesController'
import { ConnectionsController } from './controllers/ConnectionsController'

const routes = express.Router()
const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

// GET: Request a resource information
// POST: Create new information in a resource
// PUT: Re-created with a new info (Update) a new information in a resource
// DELETE: Destroy a information in a resource.

// GET /classes
routes.get('/classes', classesController.index)

// POST /classes
routes.post('/classes', classesController.create)

// GET /connections
routes.get('/connections', connectionsController.index)

// POST /connections
routes.post('/connections', connectionsController.create)

export { routes }
