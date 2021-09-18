import Rover from "../Rover";
import { Directions } from "../types";

describe("Mars Rover Obstacles",  () => {

    describe('Rover should observe obstacles', () => {
        it("set up default obstacles to empty array", () => {
			const marsRover = new Rover({
				currentPosition: [-1, 2],
				orientation: Directions.EAST,
			});

			expect(marsRover.obstacles).toEqual([]);
			expect(marsRover.obstacles.length).toEqual(0);
		});
		it("set up obstacles correctly", () => {
			const marsRover = new Rover({
				currentPosition: [3, 3],
				orientation: Directions.EAST,
				obstacles: [[5, 3]],
			});
			expect(marsRover.obstacles).toEqual([[5, 3]]);
			expect(marsRover.obstacles.length).toEqual(1);
		})
		it("set up multiple obstacles", () => {
			const marsRover = new Rover({
				currentPosition: [3, 3],
				orientation: Directions.EAST,
				obstacles: [
					[5, 3],
					[2, 7],
					[0, 0],
				],
			});
			expect(marsRover.obstacles).toEqual([
				[5, 3],
				[2, 7],
				[0, 0],
			]);
			expect(marsRover.obstacles.length).toEqual(3);
		});
    })
    


});
