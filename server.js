var express =   require("express");  
var app = express();  

var store =  require('./store'); 
var image = require('./image_process')
app.get('/',function(req,res){  
      res.sendFile(__dirname + "/index.html");  
});  
  
app.post('/processPan',function(req,res){  
    store.upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file."+err);  
        }  
        image.getTextFromImage(req.file.filename,res);
        
    });  
});  
  
app.listen(8000,function(){  
    console.log("Server is running on port 8000");  
});  