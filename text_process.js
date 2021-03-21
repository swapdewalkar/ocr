var db = require('./db')

function findDOB(text){
    return text.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
}

function findPAN(text){
    return text.match(/([A-Z]{5}[0-9]{4}[A-Z])/);
}

function clean(text,ignore_words){
    for(t in ignore_words){
        text =text.replace(ignore_words[t], "")
    }
    console.log(text)
    return text
}


function findName(text){
    // complicated
    // Assuming its a three word name

    ignore_words=["INCOME", "TAX", "DEPARTMEN","Permanent Account Number","Signature", "GOVT.", "OF", "INDIA"]
    cleanText = clean(text,ignore_words)
    reg= /([A-Za-z]+[ ][A-Za-z]+[ ][A-Za-z]+)\n([A-Za-z ]+)/g
    console.log(cleanText.match(reg))
    return cleanText.match(reg);

    // return cleanText.match(/([A-Za-z]+)/);
}


var findDetails = function(text,res){
    details={}
    details['dob']=findDOB(text);    
    details['pan']=findPAN(text);
    var name = findName(text)[0]
    details['name']=name.split("\n")[0];
    details['fname']=name.split("\n")[1];
    res.send(details)
    db.storedata(details)
}
module.exports = {findDetails}; 