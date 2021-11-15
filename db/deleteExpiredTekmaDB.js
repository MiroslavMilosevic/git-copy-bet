const Tekma = require('./tekma');
const Removed_Tekma = require('./removed_tekma');


async function logDeletedTekma(deletedTekma) {
    let removed_tekma = new Removed_Tekma({
        removed_tim1: deletedTekma.tim1,
        removed_tim2: deletedTekma.tim2,
        removed_kvota: deletedTekma.kvota,
        removed_liga: deletedTekma.liga,
        removed_game: deletedTekma.game,
        removed_sport: deletedTekma.sport,
        removed_stek: deletedTekma.stek,
        removed_dateAdded: deletedTekma.createdAt,
        removed_dateEnded: deletedTekma.dateToEnd,
        dalijeproslo: "neodluceno"
    })

    logDeletedTekmaResponse = await removed_tekma.save()

    return logDeletedTekmaResponse;
}


async function deleteExpiredTekmaDB() {
   // consolelet delete_many_response = await Tekma.deleteMany({ dateToEnd: { $lte: new Date() } });
  let tekmas_for_delete = await Tekma.find({ dateToEnd: { $lte: new Date() } });

     for(let i=0;i<tekmas_for_delete.length;i++){
          
       let logDeletedTekmaResponse = await logDeletedTekma(tekmas_for_delete[i]);
       let deleted_loged_tekma = await Tekma.findByIdAndDelete(tekmas_for_delete[i]._id);

       console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
       console.log(deleted_loged_tekma);
       console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }
   
    //return delete_many_response;
}

module.exports = deleteExpiredTekmaDB;