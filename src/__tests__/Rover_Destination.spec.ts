import Rover from "../controllers/Rover";
import { Directions } from "../controllers/Rover/types";

describe("Mars Rover Destination",  () => {

    describe('Rover should have destinations', () => {
        it("set up default destination to empty array", () => {
			const marsRover = new Rover({
				currentPosition: [-1, 2],
				orientation: Directions.EAST,
			});

			expect(marsRover.destination).toEqual([]);
		});
		it("set up destination coordinates correctly", () => {
			const marsRover = new Rover({
				currentPosition: [3, 3],
				orientation: Directions.EAST,
				destination: [0, 3],
			});
			expect(marsRover.destination).toEqual([0, 3]);
		})
    })
});
