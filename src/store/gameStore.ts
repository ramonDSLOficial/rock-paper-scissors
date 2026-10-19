import { create } from 'zustand';
import type { Moves, Result } from '../types/types';

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
	changeScoreValue: (result: Result) => void;
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
	isMultiplayer: false,
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
	changeScoreValue: (result) =>
		set((state) => {
			if (!state.isMultiplayer) {
				let pveScore = state.score.pve;
				pveScore =
					result === 'firstPlayer'
						? pveScore + 1
						: result === 'secondPlayer'
						? pveScore - 1
						: pveScore;

				return {
					score: { ...state.score, pve: pveScore >= 0 ? pveScore : 0 },
				};
			} else {
				if (result === 'draw') return;
				let firstPlayerScore = state.score.pvp.firstPlayer;
				let SecondPlayerScore = state.score.pvp.secondPlayer;

				firstPlayerScore =
					result === 'firstPlayer'
						? firstPlayerScore + 1
						: firstPlayerScore - 1;
				SecondPlayerScore =
					result === 'secondPlayer'
						? SecondPlayerScore + 1
						: SecondPlayerScore - 1;

				return {
					score: {
						...state.score,
						pvp: {
							firstPlayer:
								firstPlayerScore >= 0 ? firstPlayerScore : 0,
							secondPlayer:
								SecondPlayerScore >= 0 ? SecondPlayerScore : 0,
						},
					},
				};
			}
		}),
}));
