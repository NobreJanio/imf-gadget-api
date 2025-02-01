const request = require('supertest');
const app = require('../app');

test('GET /gadgets should return all gadgets with success probability', async () => {
    const response = await request(app).get('/gadgets');
    expect(response.status).toBe(200);
});