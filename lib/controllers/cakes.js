import { Router } from 'express';
import Cake from '../models/Cake';

export default Router()
  .post('/api/v1/cakes', async (req, res) => {
    try {
      const cake = await Cake.insert(req.body);
      res.send(cake);

    } catch (err) {
      res.status(500).send({ error: err.message });

    }
  });
