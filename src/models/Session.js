import mongoose, { Schema } from 'mongoose'

export const Session = mongoose.model('Session', new Schema({
  title: String,
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
}))