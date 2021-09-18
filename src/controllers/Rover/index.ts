import { Directions, InstructionCommands } from "./types";
import CardinalPoints from "./constants";
export default class Rover {
	currentPosition: number[];
	orientation: Directions;
	obstacles: Array<number[]>;
	stopped: boolean;

	constructor({ currentPosition = [0, 0], orientation = Directions.NORTH, obstacles = [] as Array<number[]>, }) {
		this.currentPosition = currentPosition;
		this.orientation = orientation;
		this.obstacles = obstacles;
		this.stopped = false;
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

	changeCurrentPositionOrDirection = (direction: string) => {
		switch (direction) {
			case "L":
			case "R":
				this.orientation = CardinalPoints[this.orientation][direction];
				break;
			case "F":
			case "B":
			this.currentPosition = this.moveRover(
					this.orientation,
					InstructionCommands[direction]
				);
				break;

			default:
				throw new Error(`${direction} is not a valid instruction`);
		}
	};

	willCollide = (position: number[]) => {
		let [x, y] = position;

		return this.obstacles.some((obstacle) => {
			const [obstacleX, obstacleY] = obstacle;
			return obstacleX === x && obstacleY === y;
		});
	};

	executeInstructions = (instructions: string) => {
		const formattedInstructions = this.formattedInstructions(instructions);
		for (const instruction of formattedInstructions) {
			if (instruction === "F" || instruction === "B") {
				const newPosition = this.moveRover(
					this.orientation,
					InstructionCommands[instruction]
				);

				const willHitObstruction = this.willCollide(newPosition);
				if (willHitObstruction) {
					this.stopped = true;
					break;
				}
			}

			this.changeCurrentPositionOrDirection(instruction);
		}
	};

	reportPosition() {
		return `${this.currentPosition} ${this.orientation} ${
			this.stopped ? "STOPPED" : ""
		}`;
	}
}
