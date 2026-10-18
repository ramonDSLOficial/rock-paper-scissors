import type { moves } from '../store/store';

export type Moves = (typeof moves)[number];

export type Result = 'win' | 'lose' | 'draw';
export interface GameCommonStyles {
	$hasExtraMoves: boolean;
	$isMultiplayer: boolean;
}
