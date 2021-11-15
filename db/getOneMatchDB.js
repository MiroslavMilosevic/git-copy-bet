const Tekma = require('./tekma');

async function getOneMatchDB(id){
     
try{
let match = await Tekma.findById(id);
return match;
}catch(err){

    if(err){
        return "error occurred";
    }
}
return match;

}

module.exports = getOneMatchDB;