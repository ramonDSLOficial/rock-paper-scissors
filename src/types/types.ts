import type { moves } from '../store/store';

export type Moves = (typeof moves)[number];

export type Result = 'firstPlayer' | 'secondPlayer' | 'draw';
export interface GameCommonStyles {
	$hasExtraMoves: boolean;
}
