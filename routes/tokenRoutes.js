import express from 'express'
const router = express.Router()
import { getToken } from '../controllers/tokenControllers.js'

router.route('/').get(getToken)

export default router
