import BaseController from "./base.controller";
import UserService from "../services/user.service";
const Service = new UserService();
export class AuthsController extends BaseController {
    constructor(){
        super(Service);
    }

    loginUser() {
        return async (req, res) => {
            let username = req.body.username;
            let pass = req.body.password;
            console.log(username,pass);
            let result = await Service.loginService(username,pass);
            console.log(result);
            if(result){
                res.json({success:true});
            }
            else {
                res.json({success:false});
            }
        }
    }
    registerUSer() {
        return async (req, res) => {
            let result = await Service.registerUser(req.body);
            try {
                res.cookie('cookie',result[1]);
                res.json(result);
            }
            catch (e) {
                res(e);
            }

        }
    }
}

export default new AuthsController();