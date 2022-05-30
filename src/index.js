import createServer from './app.js';

// should adapt env depending for development / tests / production
// require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` })
const app = createServer();
app.listen("3000",
    () => console.log(`Start server successfully on port 3000));
