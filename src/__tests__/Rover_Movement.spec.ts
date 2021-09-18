import Rover from "../Rover";
import { Directions } from "../types";

describe("Mars Rover Movements", function () {
	describe("Rover should validate receive input values", () => {
	
		it("Should received valid input value", () => {
			const instructions = "ffrmb";
			const marsRover = new Rover({
				orientation: Directions.EAST,
			});

			expect(() => {
				marsRover.executeInstructions(instructions);
			}).toThrow("M is not a valid instruction");
		});
	});

    describe("Rover should have the ability to rotate left or right, denoted by (L, R)", () => {
		it("should change direction from W to S when given a command to turn left", () => {
			const marsRover = new Rover({ orientation: Directions.WEST });
			marsRover.executeInstructions("L");
			expect(marsRover.orientation).toEqual(Directions.SOUTH);
		});
		it("should change direction from N to W when given a command to turn left", () => {
			const marsRover = new Rover({ orientation: Directions.NORTH });
			marsRover.executeInstructions("L");
			expect(marsRover.orientation).toEqual(Directions.WEST);
		});
		it("should change direction from E to S when given a command to turn right", () => {
			const marsRover = new Rover({ orientation: Directions.EAST });
			marsRover.executeInstructions("R");
			expect(marsRover.orientation).toEqual(Directions.SOUTH);
		});
	});
});
