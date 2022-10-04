import { Request, Response } from 'express';
import { BAuthenticate } from './bAuthenticate';

class CAuthenticate 
{
    public async Login(request: Request, response: Response){
        try{
            const {login, password} = request.body;
            const bAuth = new BAuthenticate();
    
            const tocken = await bAuth.login({
                login,
                password
            });
            console.log(tocken);
            return response.status(200).json(tocken);
        }
        catch(error){
            return response.status(409).json({ msg: "409: Occurred some error in Login user! "+ error });
        }
    }
}

export default new CAuthenticate();