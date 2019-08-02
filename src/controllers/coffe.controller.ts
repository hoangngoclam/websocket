import BaseController from "./base.controller";
import UserService from "../services/user.service";
import MoneyService from "../services/money.service";
import LogsMoneyService from "../services/logsmoney.service";

let moneyService = new MoneyService();
let userService = new UserService();
let logsMoneyService = new LogsMoneyService();


let CoffeeController =  new class CoffeeController {
    protected userService;
    protected moneyService;
    protected logsMoneyService;
    constructor(){
        this.userService = userService;
        this.moneyService = moneyService;
        this.logsMoneyService = logsMoneyService;
    }

    login(){
        return async (req, res) => {
            try {
                await this.userService.loginService(req.body.user_name,req.body.password)
                    .then(result => res.status(200).json({success:result}));
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }
    register(){
        return async (req, res) => {
            try {
                await this.userService.create(req.body)
                    .then(result => res.status(200).json({success:result}));
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }
    getLogsMoney(){
        return async (req, res) => {
            try {
                await this.userService.loginService(req.body.user_name,req.body.password)
                    .then(result => res.status(200).json({success:result}));
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }
};


export default CoffeeController