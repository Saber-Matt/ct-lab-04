import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a cake', async () => {
    const res = await request(app)
      .post('/api/v1/cakes')
      .send({ name: 'german chocolate', flavor: 'chocolate', eat: true });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', name: 'german chocolate', flavor: 'chocolate', eat: true });
  });
});
