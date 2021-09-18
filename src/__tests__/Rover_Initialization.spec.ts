import Rover from '../controllers/Rover';
import { Directions }from '../controllers/Rover/types';
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

    describe("Initialized Mars Rover with specified params", () => {
		it("should set starting location", function () {
			const marsRover = new Rover({
				currentPosition: [1, 2],
			});
			expect(marsRover.currentPosition).toEqual([1, 2]);
		});
		it("should set starting Direction/Orientation", function () {
			const marsRover = new Rover({
				orientation: Directions.EAST,
			});
			expect(marsRover.orientation).toEqual(Directions.EAST);
		});
	});

    describe("Rover should receive input values", () => {
		it("Should format the input ", () => {
			const instructions = "FFRFF";
			const marsRover = new Rover({
				orientation: Directions.EAST,
			});
			expect(marsRover.formattedInstructions(instructions)).toEqual([
				"F",
				"F",
				"R",
				"F",
				"F",
			]);
		});
		it("Should format the input from lowercase to uppercase ", () => {
			const instructions = "ffr";
			const marsRover = new Rover({
				orientation: Directions.EAST,
			});
			expect(marsRover.formattedInstructions(instructions)).toEqual([
				"F",
				"F",
				"R",
			]);
            expect(marsRover.formattedInstructions(instructions).length).toEqual(instructions.length);
            expect(marsRover.formattedInstructions(instructions)).toBeInstanceOf(Array);
		});
		
	});
});