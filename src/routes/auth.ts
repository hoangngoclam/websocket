import {Application, Request, Response} from "express";
import AuthsController from "../controllers/auths.controller";

export class Auth {
    constructor(app: Application){
        // app.route('/users/login')
        //     .post((req : Request, res: Response)=>{
        //         res.send("AUTH")
        //     })
        app.route('/users/login')
            .post(AuthsController.loginUser());
        app.route('/users/register')
            .post(AuthsController.registerUSer())
    }
}