import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'

// conect database
connectDb()

//initialize express
const app = express()

// routes
app.use('/users', userRoutes)

//error handling

const port = 5000 || process.env.PORT
app.listen(port, () => {
  console.log(`server running on ${port}`)
})
