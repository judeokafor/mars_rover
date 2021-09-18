import { Directions } from './types'
const CardinalPoints = {
	NORTH: {
		L: Directions.WEST,
		R: Directions.EAST,
	},
	EAST: {
		L: Directions.NORTH,
		R: Directions.SOUTH,
	},
	SOUTH: {
		L: Directions.EAST,
		R: Directions.WEST,
	},
	WEST: {
		L: Directions.SOUTH,
		R: Directions.NORTH,
	},
};

export default CardinalPoints