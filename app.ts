import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import apiRoutes from './src/routes/apiRoutes';
import userRoutes from './src/routes/userRoutes';
import { logger } from './src/middleware/logger';
import { errorHandler } from './src/middleware/errorHandler'

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/api', apiRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});