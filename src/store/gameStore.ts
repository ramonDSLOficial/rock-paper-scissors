import { create } from 'zustand';
import type { Moves } from '../types/types';

type GameState = {
	firstPlayer?: Moves;
	secondPlayer?: Moves;
};

type GameStore = {
	score: number;
	hasGameHapping: boolean;
	hasExtraMoves: boolean;
	isMultiplayer: boolean;
	gameState: GameState;
	changeScoreValue: (operation: number) => void;
	startGame: () => void;
	changeAvailableMoves: () => void;
	changeGameMode: () => void;
	restartGame: () => void;
	setFirstPlayerMove: (move: Moves) => void;
	setSecondPlayerMove: (move: Moves) => void;
};

export const useGameStore = create<GameStore>((set) => ({
	score: 0,
	hasGameHapping: false,
	hasExtraMoves: false,
	isMultiplayer: false,
	gameState: {},
	setFirstPlayerMove: (move) => set(() => ({ gameState: { firstPlayer: move } })),
	setSecondPlayerMove: (move) =>
		set((state) => ({ gameState: { ...state.gameState, secondPlayer: move } })),
	startGame: () => set(() => ({ hasGameHapping: true })),
	changeAvailableMoves: () => set((state) => ({ hasExtraMoves: !state.hasExtraMoves })),
	changeGameMode: () => set((state) => ({ isMultiplayer: !state.isMultiplayer })),
	restartGame: () =>
		set(() => ({
			gameState: {
				firstPlayer: null,
				secondPlayer: null,
				result: null,
			},
			hasGameHapping: false,
		})),
	changeScoreValue: (operation) =>
		set((state) => {
			const newScore = state.score + operation;
			return { score: newScore >= 0 ? newScore : 0 };
		}),
}));
