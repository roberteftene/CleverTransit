const request = require('supertest')
const app = require('../routes')

const reviewMock = [{start_point:'Piata Victoriei', end_point:'Aurel Vlaicu', leaving_hour:'14:30',duration:30,congestion_level:5,observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",satisfaction_level:3}, {start_point:'Piata Presei', end_point:'Arcul de Triumf', leaving_hour:'14:30',duration:20,congestion_level:2,observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",satisfaction_level:5}];
describe('Test restful api methods for review model', () => {

    test('Testing to see if Jest works', async done => {
        expect(2).toBe(2)
        done()
    })

    test('Test get all reviews', async done => {
        const result = await request(app).get('/reviews')
        expect(result.status).toBe(200)
        expect(result.body.length).toBe(2)
        done();

    })

})