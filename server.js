/*

TO DO:
// - Node w/Dotenv + cli usage
- Express w/Helmet, Cors, static/public/file serving
- HTML templating/building with express
- ESM? How to deal with modules; require or import
- Babel
- React + react dom
- React hooks w/Context API
- Webpack working happily and everything playing nice
- TS and Jest

*/

import express from 'express';
import path from 'path';
// import fs from 'fs';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT;
const corsOptions = {};

app
  .use(cors(corsOptions))
  .use(helmet())
  .use(express.static(path.join(__dirname, 'dist')))
  .use(express.static(path.join(__dirname, 'static')))
  .get('/',function(req,res) {
    
    // fs.readFile(path.join(__dirname, './dist/index.html'), { encoding: 'utf8'}, (err, data) => {
    //   console.log(">> READ FILE");
    //   console.log(err);
    //   console.log(data);
    // });

    // console.log(">> GET /")
    // console.log(">> GET /", './index.html');
    res.sendFile(path.join(__dirname, './dist/index.html'));

    // res.send('??? AAAA ???')

  })
  .listen(port, () => console.log(`>> App listening on port: ${port}`));