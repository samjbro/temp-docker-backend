import express from 'express'
import mongoose from 'mongoose'
import User from '../models/User'

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

module.exports = router;
