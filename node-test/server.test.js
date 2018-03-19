const request       = require('supertest');
const app           = require('./server').app;
// const chai          = require('chai')
// const expect        = chai.expect
// const assert        = chai.assert

it('should return peace world response', done => {
    request(app)
        .get('/')
        .expect(404)
        // .expect(res => {
        //     expect(res.body).to.contain({error:'not found'})
        // })
        .end(done)
})