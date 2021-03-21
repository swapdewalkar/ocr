function findDOB(text,res){
    return text.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
}

var findDetails = function(text,res){
    details={}
    details['dob']=findDOB(text,res);    


    //todo
    //Find Other details

    res.send(details)
}
module.exports = {findDetails}; 