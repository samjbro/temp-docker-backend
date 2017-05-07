import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = Schema({
  created_at: { type: Date, default: Date.now },
  name: { type: String, unique: true, required: true },
  roles: [ { type: String, enum: ['DEV', 'ADMIN'] }]
})
const User = mongoose.model('User', schema)
export default User