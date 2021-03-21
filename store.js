var multer  =   require('multer');  

var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './data');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  

  var upload = multer({ storage : storage}).single('pan');  
  
  module.exports = {upload}; 