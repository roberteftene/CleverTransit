const request = require('supertest');
const app = require('../routes');

describe('Test restful api methods for review model', () => {

    test('Testing to see if Jest works', async done => {
        expect(2).toBe(2);
        done();
    });

    test('Test get all reviews', async done => {
        const result = await request(app).get('/reviews');
        expect(result.status).toBe(200);
        expect(result.body.length).toBe(9);
        done();

    });

    test('Test delete review feature', async done => {
        const result = await request(app).get('/reviews');
        let resultBeforeDelete = result.body.length;
        await request(app).delete('/reviews/1');
        expect(result.body.length).toBe(resultBeforeDelete--);
        done();
    });

    test('Test add new review feature', async done => {
        let reviews = await request(app).get('/reviews');
        let reviewNo = reviews.body.length;
        await request(app).post('/reviews').send({
            'start_point':'Piata Iancului',
            'end_point':'Piata Obor',
            'leaving_hour':'20:40',
            'duration':30,
            'congestion_level':4,
            'observations':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            'satisfaction_level':5,
            'transportLineId': 4,
            'userId': 1
        });
        let reviewsAfterAdd = await request(app).get('/reviews');
        expect(reviewsAfterAdd.body.length).toBe(reviewNo++);
        done();
        
    });

    test('Test edit review feature', async done => {
        await request(app).put('/reviews/11').send({
            'start_point':'Piata Amnzei',
            'end_point':'Piata Obor',
            'leaving_hour':'20:40',
            'duration':30,
            'congestion_level':4,
            'observations':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            'satisfaction_level':5,
            'transportLineId': 4,
            'userId': 1 
        });
        expect(200);
        done();
    });

    test('Test get reviews by transport line id', async done => {
        await request(app).get('/lines/4/reviews');
        expect(200);
        done();
    });

});