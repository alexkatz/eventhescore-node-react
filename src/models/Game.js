import mongoose, { Schema } from 'mongoose'

export const gameSchema = new Schema({
  ranks: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  startDate: Date,
  endDate: Date,
  endedWithScratch: Boolean,
  ballsRemaining: Number,
  winnerColor: String,
  solidPocketStreak: Number,
  solidScratchCount: Number,
  stripePocketStreak: Number,
  stripeScratchCount: Number,
})

export const Game = mongoose.model('Game', gameSchema)