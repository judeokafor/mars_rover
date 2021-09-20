import { Directions, InstructionCommands } from "./types";
import CardinalPoints from "./constants";
export default class Rover {
	currentPosition: number[];
	orientation: Directions;
	obstacles: Array<number[]>;
	stopped: boolean;
	destination: number[];

	constructor({
		currentPosition = [0, 0],
		orientation = Directions.NORTH,
		obstacles = [] as Array<number[]>,
		destination = [] as number[],
	}) {
		this.currentPosition = currentPosition;
		this.orientation = orientation;
		this.obstacles = obstacles;
		this.stopped = false;
		this.destination = destination;
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

		return this.orientation;
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

	moveToDestination = () => {
		if (this.destination.length) {
			let [x0, y0] = this.currentPosition;
			let presentOrientation = this.orientation;
			const [x1, y1] = this.destination;

			const commands = [] as InstructionCommands[];
			let newCommand = InstructionCommands.F;

			while (!(x0 === x1 && y0 === y1)) {
				if (x0 !== x1) {
					// [0,1] ===> [2, 4]; x0 = 0; x1 = 2
					// if the difference between x0 and x1 is positive and direction is east move forward, else if direction is west move backward;
					// [4, 0] ==> [1, 2]; x0 = 4; x1 = 1;
					// else if the difference is negative and direction is east move backward, else if direction is west move forward ,

					const differenceInXAxis = Math.abs(x1 - x0);
					const isPositiveDirection = Math.sign(x1 - x0) === 1;

					if ([Directions.EAST, Directions.WEST].includes(presentOrientation)) {
						if (isPositiveDirection && presentOrientation === Directions.WEST) {
							newCommand = InstructionCommands.B;
                            x0--
						} else {
                            x0++
                        }
					}
					for (let index = 0; index < differenceInXAxis; index++) {
						commands.push(newCommand)
						this.moveRover(presentOrientation, newCommand);
					}
				}

				if (y0 !== y1) {
					const differenceInYAxis = Math.abs(y1 - y0);
					const isPositiveDirection = Math.sign(y1 - y0) === 1;

					if ([Directions.NORTH, Directions.SOUTH].includes(presentOrientation)) {
						if (isPositiveDirection && presentOrientation === Directions.SOUTH) {
							newCommand = InstructionCommands.B;
                            y0--;
						} else {
                            y0++;
                        }
					}
					for (let index = 0; index < differenceInYAxis; index++) {
                        commands.push(newCommand);
						this.moveRover(presentOrientation, newCommand);
					}
				}
			}
			return commands;
		}
	};
}
