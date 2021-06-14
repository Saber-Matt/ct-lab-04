import { insertBefore } from 'parse5/lib/tree-adapters/default';
import pool from '../utils/pool';

export default class Cake {
  id;
  name;
  flavor;
  eat;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.flavor = row.flavor;
    this.eat = row.eat;
  }

  static async insert({ name, flavor, eat }) {
    const { rows } = await pool.query(`
    INSERT FROM cakes (name, flavor, eat)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [name, flavor, eat]);

    return new Cake(rows[0]);

  }
}
