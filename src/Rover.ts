import { Directions, InstructionCommands } from "./types";
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

	moveRover(orientation: Directions, direction: InstructionCommands) {
		let [x, y] = this.currentPosition;

		let xIncrease = 0,
			yIncrease = 0;

		if (orientation === Directions.NORTH) yIncrease = 1;
		else if (orientation === Directions.SOUTH) yIncrease = -1;
		else if (orientation === Directions.EAST) xIncrease = 1;
		else if (orientation === Directions.WEST) xIncrease = -1;

		if (direction === InstructionCommands.B) {
			xIncrease *= -1;
			yIncrease *= -1;
		}

		return [x + xIncrease, y + yIncrease];
	}

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
					this.currentPosition = this.moveRover(
						this.orientation,
						InstructionCommands[instruction]
					);
					break;

				default:
					throw new Error(`${instruction} is not a valid instruction`);
			}
		}
	};
}
