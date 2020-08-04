import { Response, Request } from 'express'
import { db } from '../database/connection'

export class ConnectionsController {
  async index (request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total')
    const { total } = totalConnections[0]

    return response.json({ total })
  }

  async create (request: Request, response: Response) {
    const { user_id: userId } = request.body

    await db('connections').insert({
      userId
    })

    response.status(201).send()
  }
}
