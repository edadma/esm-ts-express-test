// src/__test__/index.test.ts
import request from 'supertest'
import { app } from '../app.js'
import type { Express } from 'express'

describe('Express Server Tests', () => {
  let server: Express

  beforeAll(() => {
    server = app
  })

  describe('GET /', () => {
    it('should return 200 and "Hello World"', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200)
      expect(response.text).toBe('Hello World')
    })
  })

  describe('Server Configuration', () => {
    it('should have CORS enabled', () => {
      const corsMiddleware = server._router.stack.find((layer: { name: string }) => layer.name === 'corsMiddleware')
      expect(corsMiddleware).toBeDefined()
    })

    it('should have JSON body parser enabled', () => {
      const jsonMiddleware = server._router.stack.find((layer: { name: string }) => layer.name === 'jsonParser')
      expect(jsonMiddleware).toBeDefined()
    })
  })
})
