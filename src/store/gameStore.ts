import { create } from 'zustand';
import type { Moves, Result } from '../types/types';

type GameState = {
	firstPlayer?: Moves;
	secondPlayer?: Moves;
	result?: Result;
};

type GameStore = {
	score: number;
	hasGameHapping: boolean;
	gameState: GameState;
	setFirstPlayerMove: (move: Moves) => void;
	setSecondPlayerMove: (move: Moves) => void;
	startGame: () => void;
    setGameResult: (result: Result) => void;
    changeScoreValue: (operation: number) => void;
};

export const useGameStore = create<GameStore>((set) => ({
	score: 0,
	hasGameHapping: false,
	gameState: {},
	setFirstPlayerMove: (move) => set(() => ({ gameState: { firstPlayer: move } })),
	setSecondPlayerMove: (move) =>
		set((state) => ({ gameState: { ...state.gameState, secondPlayer: move } })),
	startGame: () => set(() => ({ hasGameHapping: true })),
    setGameResult: (result) => set((state) => ({ gameState: { ...state.gameState, result: result }})),
    changeScoreValue: (operation) => set((state) => {
		const newScore = state.score +  operation
		return { score: newScore >= 0 ? newScore : 0 }
	})
}));
