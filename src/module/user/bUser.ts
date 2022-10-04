import { client } from "../../prisma/client";
import { hash } from "bcrypt";

import { IUserResquest } from "./iUser";

class BUser 
{
    async execute({name, login, password}: IUserResquest){
        const userAlreadyExists = await client.user.findFirst({
            where: {
                login,
            }
        });

        if(userAlreadyExists){
            throw new Error('User already exists!');
        }

        const passwordHash = await hash(password, 8);

        const user = await client.user.create({
            data:{
                name,
                login,
                password: passwordHash
            }
        });

        return user;
    }
}

export { BUser }