
import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT;
const corsOptions = {};

app
  .use(
    helmet(),
    cors(corsOptions),
    express.static('dist')
  )
  
  .get('/',function(req,res) {
    console.log(">> GET", path.join(__dirname+'/dist/index.html'));

    res.sendFile(path.join(__dirname+'/dist/index.html'));

    // console.log(">> GET REQUEST", `${path.join(__dirname, 'dist')}/index.html`);

    // res.sendFile('/index.html', { 
    //   root: path.join(__dirname, 'dist')
    // });
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