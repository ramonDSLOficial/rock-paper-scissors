import { create } from 'zustand';
import type { Moves } from '../types/types';

type GameState = {
	firstPlayer?: Moves;
	secondPlayer?: Moves;
};

type Score = {
	pve: number;
	pvp: {
		firstPlayer: number;
		secondPlayer: number;
	};
};

type GameStore = {
	score: Score;
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
	score: {
		pve: 0,
		pvp: {
			firstPlayer: 0,
			secondPlayer: 0,
		},
	},
	hasGameHapping: false,
	hasExtraMoves: false,
	isMultiplayer: true,
	gameState: {},
	setFirstPlayerMove: (move) => set(() => ({ gameState: { firstPlayer: move } })),
	setSecondPlayerMove: (move) =>
		set((state) => ({ gameState: { ...state.gameState, secondPlayer: move } })),
	startGame: () => set(() => ({ hasGameHapping: true })),
	changeAvailableMoves: () =>
		set((state) => ({ hasExtraMoves: !state.hasExtraMoves })),
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
			const newScore = state.score.pve + operation;
			return { score: { ...state.score, pve: newScore >= 0 ? newScore : 0 } };
		}),
}));
