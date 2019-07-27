"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Require the dev-dependencies
const chai = require("chai");
const server_1 = require("../server");
const chaiHttp = require("chai-http");
let should = chai.should();
chai.use(chaiHttp);
const user_model_1 = require("../database/models/user.model");
//Our parent block
describe('Users', () => {
    beforeEach((done) => {
        user_model_1.UserModel.deleteMany({}, (err) => {
            done();
        });
    });
    /*
      * Test the /GET route
      */
    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(server_1.default)
                .get('/users')
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });
    /*
  * Test the /POST route
  */
    describe('/POST user', () => {
        it('it should not POST a user without confirm password', (done) => {
            let user = {
                username: "haihn01",
                password: "1233456"
            };
            chai.request(server_1.default)
                .post('/users')
                .send(user)
                .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('Confirm password to continue!');
                done();
            });
        });
    });
    /*
 * Test the /POST route
 */
    describe('/POST user', () => {
        it('it should POST a user', (done) => {
            let user = {
                username: "haihn01",
                password: "1233456",
                confirmPassword: "1233456",
                displayName: "Hai Huynh"
            };
            chai.request(server_1.default)
                .post('/users')
                .send(user)
                .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
        });
    });
});
