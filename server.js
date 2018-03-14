let express = require('express')
require('./db.js')
// let mongoose = require()
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

let routes = require('./routes');

app.set('port', 4000);
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
app.use('/api', routes);




let server = app.listen(app.get('port'), function(){
    let port = server.address().port;
    console.log("Connected Successfully at", + port);
});