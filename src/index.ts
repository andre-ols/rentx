import express from 'express';
import swaggerUi from 'swagger-ui-express';
import './database';
import { router } from './routes';
import './shared/container';
import swaggerFile from './swagger.json';


const app = express();
 
app.use(express.json());

app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
