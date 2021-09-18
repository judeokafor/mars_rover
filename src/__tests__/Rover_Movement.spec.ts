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
});
