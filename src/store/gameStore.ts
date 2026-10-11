import { create } from 'zustand';
import type { Moves } from '../types/types';

type GameState = {
	firstPlayer?: Moves;
	secondPlayer?: Moves;
};

type GameStore = {
	score: number;
	hasGameHapping: boolean;
	gameState: GameState;
	setFirstPlayerMove: (move: Moves) => void;
	setSecondPlayerMove: (move: Moves) => void;
	startGame: () => void;
	restartGame: () => void;
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
	restartGame: () => set(() => ({
		gameState: {
			firstPlayer: null,
			secondPlayer: null,
			result: null,
		},
		hasGameHapping: false
	})),
    changeScoreValue: (operation) => set((state) => {
		const newScore = state.score + operation
		return { score: newScore >= 0 ? newScore : 0 }
	})
}));
