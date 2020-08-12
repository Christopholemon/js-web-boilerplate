/*
import express from 'express';
import path from 'path';
// import cors from 'cors';
// import helmet from 'helmet';

const app = express();
const port = process.env.PORT;
// const corsOptions = {};

app
  // .use(cors(corsOptions))
  // .use(helmet())
  .use(express.static(path.join(__dirname, 'dist')))
  .get('/',function(req,res) {
    // res.sendFile('/dist/index.html');
    res.send('???')
  })
  .listen(port, () => console.log(`>> App listening on port: ${port}`));

// Node
// Express
// Helmet
// Cors
// ESM? How to deal with modules; require or import
// Dotenv + cli usage
// Babel
// React + react dom
// React hooks or separate state management?
*/

import express from 'express';

const app = express();
const PORT = 3333;

app
  .get('/', (req, res) => {
    res.send('Hello World!')
  })
  .listen(PORT, () => console.log(`>> RUNNING AND LISTENING ON PORT ${PORT}`))