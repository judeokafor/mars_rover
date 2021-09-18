import Rover from "../Rover";
import { Directions } from "../Rover/types";

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
    
    describe("Might encounter an obstacle during movement", () => {
		
        it("should not hit the obstacle", () => {
            const marsRover = new Rover({
                currentPosition: [1, 4],
                orientation: Directions.WEST,
                obstacles: [
                    [5, 3],
                    [2, 7],
                    [0, 0],
                ],
            });
            marsRover.executeInstructions("flFlbBR");
            expect(marsRover.currentPosition).toEqual([-2, 3]);
            expect(marsRover.obstacles.length).toEqual(3);
        });
        it("should stop when obstacle is on the step before the next",  () => {
            const marsRover = new Rover({
                currentPosition: [0, 0],
                orientation: Directions.EAST,
                obstacles: [[3, 0]],
            });
            marsRover.executeInstructions("FFFLF");
            expect(marsRover.stopped).toBe(true);
            expect(marsRover.currentPosition).toEqual([2, 0]);
        });
        it("should set status to STOPPED when hit an obstacle",  () => {
            const marsRover = new Rover({
                currentPosition: [0, 0],
                orientation: Directions.EAST,
                obstacles: [[3, 0]],
            });
            marsRover.executeInstructions("FFFLF");
            expect(marsRover.stopped).toBe(true);
            expect(marsRover.reportPosition()).toContain("STOPPED");
        });
    });
    


});
