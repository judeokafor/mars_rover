import {Directions} from './types'
export default class Rover {
    currentPosition: number[];
	orientation: Directions;

    constructor({
		currentPosition = [0, 0],
		orientation = Directions.NORTH,
	}) {
		this.currentPosition = currentPosition;
		this.orientation = orientation;
	}

	formattedInstructions = (instructions: string) => {
        return instructions.toUpperCase().trim().split("");
    }
}