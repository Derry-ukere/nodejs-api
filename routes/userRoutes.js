import express from 'express'
const router = express.Router()
import {
  getUsers,
  home,
  addUser,
  getOneUser,
} from '../controllers/userControllers.js'

router.route('/').get(home)
router.route('/:id').get(getOneUser)
router.route('/getall').get(getUsers)
router.route('/add').post(addUser)

export default router
