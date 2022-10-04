import { compare } from "bcrypt";
import { client } from "../../prisma/client";

import { IAuthenticateRequest } from './iAuthenticate';

class BAuthenticate 
{
    async login({login, password}: IAuthenticateRequest){
        const userAlreadyExists = await client.user.findFirst({
            where:{ login }
        });
        
        if(!userAlreadyExists){
            throw new Error('User or password invalid!');
        }

        const passwordMath = await compare(password, userAlreadyExists.password);

        if(!passwordMath){
            throw new Error('User or password invalid!');
        }

        const jwt = require('jsonwebtoken');
        const token = jwt.sign({login: userAlreadyExists.login },"390ef87f-02f0-49f4-8b50-7e741722092d", {
            subject: userAlreadyExists.id.toString(),
            expiresIn: "30s"
        });

        return {token};
    }
}

export { BAuthenticate };