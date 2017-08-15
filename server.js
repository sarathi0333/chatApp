var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var port = process.env.PORT | 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+ "/public"));

app.post('/msg', function(req,res){
    console.log(req.body);
    var data = {
        query: req.body.message,
        "lang": "en",
        "sessionId": "1234567890"
    }
    request({
        url:"https://api.api.ai/v1/query?v=20150910",
        method:"POST",
        headers: {
            "Authorization":"Bearer xxx",
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }, function(error, response, body) {
        var data = JSON.parse(body);
        res.json(data);
    });
   

});

app.listen(port, function() {
    console.log("server running in port" + port + " ...")
})
