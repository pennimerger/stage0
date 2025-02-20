import express, { Request, Response } from 'express'
import cors from "cors"
import "dotenv/config"

const app = express()

app.use(cors())
app.get('/', (req:Request, res:Response) => {
    const currentDatetime = new Date()
    const basicInfo = {
    "email": process.env.EMAIL as string,
    "current_datetime": currentDatetime.toISOString(),
    "github_url": process.env.GITHUB_URL as string
    }
  res.json(basicInfo)
})

app.listen(3033, () => {
  console.log(`Server started.`)
})