import asyncHandler from 'express-async-handler'
import User from '../models/users.js'
import generateToken from '../utils/generateToken.js'

//@desc    Home
//@routes  /api/users
//@acces  public
const home = asyncHandler(async (req, res) => {
  res.send('api is running!!')
})

//@desc  Get All Users
//@routes  /users/getAll
//@acces  public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

//@desc  Add a new user
//@routes  POST /api/users/add
//@acces  public
const addUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    throw new Error('User already exist')
  }

  const user = await User.create({
    name,
    email,
    password,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export { getUsers, home, addUser }
