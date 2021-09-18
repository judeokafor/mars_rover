import Rover from '../Rover';
import { Directions }from '../types';
describe("Mars Rover", function () {
	describe("Rover class set up with default ", () => {
		it("Set up Rover with fallback position to 0 x 0", () => {
			const marsRover = new Rover({});
			expect(marsRover.currentPosition).toEqual([0, 0]);
		});
		it("Set up Rover with fallback direction", () => {
			const marsRover = new Rover({});
			expect(marsRover.orientation).toEqual(Directions.NORTH);
		})
	})
});