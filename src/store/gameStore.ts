import { create } from 'zustand'
import type { Moves, Result } from '../types/types'

type GameState = {
    firstPlayer?: Moves
    secondPlayer?: Moves
    result?: Result
}

type GameStore = {
    score: number,
    hasGameHapping: boolean,
    gameState: GameState
}

export const useGameStore = create<GameStore>(() => ({
    score: 0,
    hasGameHapping: false,
    gameState: {}
}))