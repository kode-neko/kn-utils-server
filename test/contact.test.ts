import request from 'supertest';
import app from '../src/app';

describe('API Contact', () => {
  it('Envío de mensaje', async () => {
    const res = await request(app)
      .post('/contact')
      .send({
        name: 'test',
        mail: 'test@mail.com',
        content: 'Sunt ex nisi veniam qui excepteur veniam incididunt ea consectetur aliquip ipsum esse.'
      });

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('This is fine');
  });
});