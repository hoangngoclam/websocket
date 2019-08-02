import CoffeeController from "../controllers/coffe.controller";

export class Coffee {
    constructor(app) {
        app.route('/coffee/login')
            .post(CoffeeController.login());
        app.route('/coffee/register')
            .post(CoffeeController.register());
        app.route('/coffee')
    }
}