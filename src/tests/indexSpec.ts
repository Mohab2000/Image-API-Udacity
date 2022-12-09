import supertest from 'supertest';
import app from '../index';
//http://localhost:8080/image?filename=fjord&height=100&width=100

const request = supertest(app);

describe('Testing app end point' , ():void => {
    it('response is returned as 200 as the path is valid' , async (): Promise<void> => {
        const response = await request.get('/')
        expect(response.status).toBe(200);
    })
})

describe('checks endpoints for images' , ():void => {
it('gets the end point for images /images?filename=fjord&height=100&width=100' , async (): Promise<void> => {
    const response = await request.get('/image?filename=fjord&height=100&width=100')
    setTimeout(() => {
        expect(response.status).toBe(200);
    }, 2000)
  
})
})
describe('invalid endpoint' , ():void => {
    it('response is returned as 404 as the path is invalid' , async (): Promise<void> => {
        const response = await request.get('/image/invalid')
        expect(response.status).toBe(404);
    })
})



