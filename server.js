const http = require('http')
const app = require('./config/express')();
const database = require('./config/database');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/bea-project';

database(MONGODB_URI);

http.createServer(app).listen(app.get('port'), () => {
    console.log('Executando')
});
