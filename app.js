const express = require('express')
 const app = express()
 
 app.get('/hello', function(req, res){
    res.send("Name:Kornkrit SATIT <br/>Login Date: July 30,2017 ")
    })
 
 app.listen(9999,function(){
 console.log("Server is running on PORT 9999")
 })