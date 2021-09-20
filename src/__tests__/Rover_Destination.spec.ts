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
    describe('Rover should have sets of commands', () => {
        it("should return sets of commands if there is a destination property set", () => {
			const marsRover = new Rover({
				currentPosition: [-1, 2],
				orientation: Directions.WEST,
                destination: [0, 3],
			});

			expect(marsRover.moveToDestination()).toBeInstanceOf(Array);
            expect(marsRover.moveToDestination).toBeCalled();
            expect(marsRover.moveToDestination()).toReturn()
		});
    })
});
