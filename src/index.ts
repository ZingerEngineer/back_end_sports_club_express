import express, { Response } from 'express'
import dotenv from 'dotenv'
import dbConnect from './dbConnection'
dotenv.config()

const port = process.env.PORT || 3000
dbConnect()
const app = express()

app.get('/', (_, res: Response) => {
  res.json({ message: 'welcome' })
})
app.listen(port, () => {
  console.log(`Connected successfully at port ${port}`)
})
