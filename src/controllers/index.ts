import Rover from "./Rover";
import { Request, Response } from "express";
import { Directions } from "./Rover/types";

interface IRequestBody {
    currentPosition?: number[],
    orientation?: Directions,
    obstacles?: Array<number[]>,
}

export async function handleRequest(req: Request, res: Response) {
	const { currentPosition, orientation, obstacles, instructions } = req.body;

    const initializeRoverWith = {} as IRequestBody;

    if (currentPosition && currentPosition.length) {
        initializeRoverWith.currentPosition = currentPosition;
    }

    if (orientation) {
        initializeRoverWith.orientation =  orientation;
    } 

    if (obstacles && obstacles.length) {
        initializeRoverWith.obstacles =  obstacles;
    }

	try {
        const marsRover = new Rover(initializeRoverWith);
        marsRover.executeInstructions(instructions);
		return res.status(200).send(marsRover.reportPosition());
	} catch (error) {
		return res.status(500).send(error);
	}
}
