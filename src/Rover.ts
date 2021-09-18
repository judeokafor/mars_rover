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
	
	executeInstructions = (instructions: string) => {
		const formattedInstructions = this.formattedInstructions(instructions);
		for (const instruction of formattedInstructions) {
			switch (instruction) {
				case "L":
				case "R":
				case "F":
				case "B":
				// switch orientation
					break;
				
				default:
					throw new Error(`${instruction} is not a valid instruction`);
			}
		}
	}
}