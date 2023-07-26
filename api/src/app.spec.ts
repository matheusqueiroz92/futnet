import request from 'supertest';
import { App } from './app';

describe('App test', () => {
  const app = new App().app;

  it('Should test the server running', async () => {
    const response = await request(app).get('/');
    expect(response.body).toStrictEqual({ ok: true });
  });

  it('Should check if create user', async () => {
    const response = await request(app).post('/user').send({
      name: 'Matheus Queiroz',
      email: 'matheusqueiroz@azworkcenter.com.br',
      password: '123456'
    });
    
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should check if get users', async () => {
    const response = await request(app).get('/users');
    console.log(response.body);
    
    expect(response.statusCode).toEqual(200);
  });
});