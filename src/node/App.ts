import * as express from 'express'
import { Person, PersonUrl } from '../common/entity';

class App {
  public express;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    this.express.use('/', router);
    
    router.get('/', (req, res) => {
      res.sendFile(__dirname + "/index.html");
    })
    router.get('/bundle.js', (req, res) => {
      res.sendFile(__dirname + "/client-bundle.js");
    })

    router.get(PersonUrl, (req, res) => {
      const person: Person = {
        name: "Redhat man",
        id: "id1",
        age: 37
      }
      res.json(person);
    });

    this.express.use('/', router);
  }
}

export default new App().express;
