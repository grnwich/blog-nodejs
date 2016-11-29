/**
 * Created by cos on 16/11/25.
 */
var path=require('path');
var express=require('express');
var session=require('express-session');
var app = express();

app.get('/', function(req, res) {
    res.send('hello, express');
});

app.listen(3000,function(){
    console.log('Express server listening on port ' + app.get('port'));
});