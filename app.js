import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import tokenRoutes from './routes/tokenRoutes.js'

// conect database
connectDb()

//initialize express
const app = express()
app.use(express.json())

// routes
app.use('/users', userRoutes)
app.use('/generateToken', tokenRoutes)

//error handling

const port = 5000 || process.env.PORT
app.listen(port, () => {
  console.log(`server running on ${port}`)
})
