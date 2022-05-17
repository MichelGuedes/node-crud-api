//tutorial url: https://blog.nerdjfpb.com/how-to-build-simple-crud-restful-api-with-nodejs-expressjs-and-mongodb-in-2022/

import 'dotenv/config';
import Express from 'express';
import Cors from 'cors';
import Hemlet from 'helmet';
import rateLimit from 'express-rate-limit';
import Morgan from 'morgan';
import Mongoose from 'mongoose';

const app = Express();
const port = process.env.port || 3000;
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false
});

app.listen(port, () => console.log('Server is running on port ${port}'));
app.use(Hemlet());
app.use(Cors());
app.use(limiter);
app.use(Morgan('tiny'));
app.use(Express.json());

Mongoose.connect('mongodb://localhost/node-api')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Não foi possível abrir conexão com o MongoDB: ${err}'));