import express, { Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.get('/', (_, res: Response) => {
  res.json({ message: 'welcome' })
})
app.listen(port, () => {
  console.log(`Connected successfully at port ${port}`)
})
