const request = require('supertest')
const app = require('../routes')

describe('Test restful api methods for review model', () => {

    test('Testing to see if Jest works', async done => {
        expect(2).toBe(2)
        done()
    })

    test('Test get all reviews', async done => {
        const result = await request(app).get('/reviews')
        expect(result.status).toBe(200)
        expect(result.body.length).toBe(4)
        done();

    })

    test('Test delete review feature', async done => {
        const result = await request(app).get('/reviews')
        let resultBeforeDelete = result.body.length
        await request(app).delete('/reviews/1')
        expect(result.body.length).toBe(resultBeforeDelete--)
        done();
    })

})