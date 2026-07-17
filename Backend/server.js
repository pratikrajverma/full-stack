import express from 'express'
import cors from 'cors'
const app = express()
import dotenv from 'dotenv'

dotenv.config()

import connectDb from './database/mogodb.js'
import router from './routes/userRoute.js'

// const port = 4000


app.use(cors({
    origin:'*',
    methods:['GET', 'POST' , 'PUT', 'DELETE']
}))


app.use(express.json())

app.use(router)

connectDb()


app.get('/hello', (req,res)=>{
    res.send('<h1>hii</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log('server is running on port')
})
