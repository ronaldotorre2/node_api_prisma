/*-----------------------------------------------------------
 * Info...........: Controller of User 
 * Author.........: Ronaldo Torre
 * ---------------------------------------------------------*/

import { Request, Response } from 'express';
import { BUser } from './bUser';

class CUser 
{
    /* Create new user */
    public async create(request: Request, response: Response){
        try{
            const {name, login, password, createdAt } = request.body;
            const bUser = new BUser();
    
            const user = await bUser.execute({
                name,
                login,
                password
            });
    
            return response.status(200).json(user);
        }
        catch(error){
            return response.status(409).json({ msg: "409: Occurred some error in Create user! "+ error });
        }
    }
}

export default new CUser();