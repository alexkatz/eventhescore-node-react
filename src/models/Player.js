import mongoose, { Schema } from 'mongoose'

export const Player = mongoose.model('Player', new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  imageUrl: String,
}))
