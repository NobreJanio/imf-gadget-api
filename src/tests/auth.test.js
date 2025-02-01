test('POST /auth/login should return a JWT token', async () => {
    const response = await request(app).post('/auth/login').send({ email: 'test@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
});