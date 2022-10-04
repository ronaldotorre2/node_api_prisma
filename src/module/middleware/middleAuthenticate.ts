import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            msg: "Token is missing"
        })
    }

    const [, token] = authToken.split(" ");

    try{
        verify(token, "390ef87f-02f0-49f4-8b50-7e741722092d");
        return next();
    }
    catch(error){
        return response.status(401).json({
            msg: "Token is missing"
        })
    }
}