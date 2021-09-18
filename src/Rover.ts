import { Directions } from "./types";
import CardinalPoints from "./constants";
export default class Rover {
	currentPosition: number[];
	orientation: Directions;

	constructor({ currentPosition = [0, 0], orientation = Directions.NORTH }) {
		this.currentPosition = currentPosition;
		this.orientation = orientation;
	}

	formattedInstructions = (instructions: string) => {
		return instructions.toUpperCase().trim().split("");
	};
	1;
	executeInstructions = (instructions: string) => {
		const formattedInstructions = this.formattedInstructions(instructions);
		for (const instruction of formattedInstructions) {
			switch (instruction) {
				case "L":
				case "R":
					this.orientation = CardinalPoints[this.orientation][instruction];
					break;
				case "F":
				case "B":
					// move rover
					break;

				default:
					throw new Error(`${instruction} is not a valid instruction`);
			}
		}
	};
}
