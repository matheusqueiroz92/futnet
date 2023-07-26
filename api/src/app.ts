import express from 'express';
import crypto from 'crypto';

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config()
    this.routes()
  }

  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    let users: any = [];
    this.app.get('/', (_req, res) => {
      return res.json({ ok: true })
    });

    this.app.post('/user', (req, res) => {
      const { name, email, password } = req.body;
      const id = crypto.randomUUID();
      const data = { id, name, email, password };
      users.push(data)
      
      return res.status(201).json(data)
    });

    this.app.get('/user', (_req, res) => {
      return res.status(200).json(users)
    });
  }

  listen(port: number) {
    this.app.listen(port, () => console.log(`Server is running on port ${port}`));
  }
}

export { App }