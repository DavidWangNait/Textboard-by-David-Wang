var express = require('express');
var cors = require('cors');
var app = express();
var bodyparser = require('body-parser');
var parser = bodyparser.urlencoded({extended:false});

content = "Hi, this is the textboard by YuyuanWang(David). Dear manager, please add the first post for me."
app.use(cors());
app.get('/visit',function(req,res){
    res.end(JSON.stringify({"info":content}))
});
app.post('/post',parser,function(req,res){
    console.log(req.body);
    var newcontent = req.body.content;
    var password = req.body.password;
    if(password=="abcd"){
        var mess = "success";
        content = newcontent;
        console.log("success:"+newcontent);
    }
    else{
        var mess = "Wrong password";
        console.log("Wrong password");
    }
    res.end(JSON.stringify({"info":mess}));
})
var server = app.listen(7500, function(){console.log("Listening on 7500.")});