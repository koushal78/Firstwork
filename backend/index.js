import express from "express"
import dotenv from "dotenv"
import jobRouter from './routes/job.js'
import connect from "./db/connect.js"
import resumeRouter from './routes/resume.js'
dotenv.config()
import cors from 'cors'





const app = express()
app.use(express.json())


app.use(cors())

app.use(cors({
    origin: 'http://localhost:5173',
  }));

const port  = process.env.PORT || 5000


app.use('/api/job',jobRouter)
app.use('/api/resume',resumeRouter)

app.listen(port,()=>{
    connect()
    console.log(`app is  running on the port number ${port}`)
})