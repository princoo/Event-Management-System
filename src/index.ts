import express from 'express';
import router from './routers/index.ts';
const app = express();

app.use('/', router);

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default server;
