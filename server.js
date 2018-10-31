const http = require('http')
const app = require('./config/express')();
const database = require('./config/database.js');

database('mongodb://localhost/bea-project');

http.createServer(app).listen(app.get('port'), () => {
    console.log('Executando')
});
