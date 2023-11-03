import {NextFunction, Request, Response} from "express";
import axios from "axios";

export const testFunction = async (req: Request, res: Response, next: NextFunction) => {
	let result = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
	return res.send(result.data);
};