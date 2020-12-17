import { NextFunction, Response, Request } from "express";
import usecases from "./usecases";


const { add } = usecases


const makeUserController = () => {
    return {
        calculateSum: async (req: Request, res: Response, { }: NextFunction) => {
            try {
                const { array1, array2 }: any = req.body;
                const sum = add(array1, array2)
                res.status(200).send(sum);

            } catch (err) {
                res.status(400).json({ error: err.message });
            }
        },
    };
};

// Here you can Inject Dependecies
const controllers = makeUserController()


export default controllers;
