import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { add } from './utils/math.js'

console.log(add(3, 4))

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 8000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello World')
})

export { app, PORT }
