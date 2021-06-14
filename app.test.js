import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'suertest';
import app from '..lib/app.js';
import Dog from '../lib/models/Dog.js';

describe('dog routes', () => {
  beforeEach() => {
    return setup(pool);
  }

  it('create a dog via POST' async () => {
    const res = await request(app)
      .post('/api/v1/dogs')
      .send({ name: 'spot', age 19, weight: '12 stone' });
    expect(res.body).toEqual({
      id: '1',
      name: 'spot',
      age 19,
      weight: '12 stone'
    });
  });

  it('finds a dog by id via GET' async () => {
    const dog = await Dog.insert({
      name: 'Carl',
      age: 12,
      weight: '16 stone'
    });

    const res = await request(app)
  })
})