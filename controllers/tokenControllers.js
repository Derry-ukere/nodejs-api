import asyncHandler from 'express-async-handler'
import User from '../models/users.js'
import generateToken from '../utils/generateToken.js'

const getToken = asyncHandler(async (req, res) => {
  const token = generateToken('1254578a')
  res.send(token)
})

export { getToken }
