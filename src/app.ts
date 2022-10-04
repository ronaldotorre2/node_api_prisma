 import express from 'express';
 import routes from './routers';
 
 class App {
     public express: express.Application;
     
     public constructor(){
         this.express = express();
         this.middleware();
         this.route();
     }
     
     private middleware(): void {
         this.express.use(express.json());
     }
     
     private route(): void {
        this.express.use(routes);
     }
 }
 
 export default new App().express;