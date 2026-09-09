export const defaultMoves = ['rock', 'paper', 'scissors'] as const
export const bonusMoves = ['lizard', 'spock'] as const
export const moves = [...defaultMoves, ...bonusMoves] as const