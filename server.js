const app = require('./app');

require('dotenv').config();

app.listen(process.env.PORT, () => console.log('app listening on 7040'));