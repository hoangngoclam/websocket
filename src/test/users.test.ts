//Require the dev-dependencies
import * as chai from 'chai';
import server from "../server";
import chaiHttp = require('chai-http');

let should = chai.should();
chai.use(chaiHttp);
import {UserModel} from "../database/models/user.model";

//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        UserModel.deleteMany({}, (err) => {
            done();
        });
    });
    /*
      * Test the /GET route
      */
    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
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
            chai.request(server)
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
            chai.request(server)
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
