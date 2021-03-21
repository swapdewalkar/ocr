const tesseract = require("node-tesseract-ocr")
const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

var textProcess = require('./text_process')

var getTextFromImage = function(filename,res){
    //Use YOLO 

    tesseract.recognize("./data/"+filename, config)
        .then(text => {
            console.log(text);
            textProcess.findDetails(text,res); 
        })
        .catch(error => {
            console.log(error.message);
            res.send("Error");
        })
    }

module.exports = {getTextFromImage}; 