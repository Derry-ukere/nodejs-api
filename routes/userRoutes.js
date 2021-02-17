import express from 'express'
const router = express.Router()
import { getUsers, home, addUser } from '../controllers/userControllers.js'

router.route('/').get(home)
router.route('/getall').get(getUsers)
router.route('/add').post(addUser)

export default router
