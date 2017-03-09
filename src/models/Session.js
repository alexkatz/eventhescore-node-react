import mongoose, { Schema } from 'mongoose'
import { gameSchema } from './Game'

export const Session = mongoose.model('Session', new Schema({
  title: String,
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  games: [gameSchema],
}))