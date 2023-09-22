import express from 'express';
import serverRoutes from './routes/index';

const app = express();
const port = 1245;

serverRoutes(app);

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

export default app;
