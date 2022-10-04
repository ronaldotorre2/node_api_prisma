import {Router} from 'express';

import CUser from './module/user/cUser';
import CAuthenticate from './module/authenticate/cAuthenticate';
import { ensureAuthenticated } from './module/middleware/middleAuthenticate';

const routes =  Router();
routes.post('/api/user', CUser.create);
routes.post('/api/sign', CAuthenticate.Login);

routes.get('/api/course', ensureAuthenticated, (request, response) => {
    return response.status(200).json([
        {id: 1, name: "nodejs"},
        {id: 2, name: "React"},
        {id: 3, name: "Java"},
        {id: 4, name: "Dotnet"}
    ])
 });

export default routes;