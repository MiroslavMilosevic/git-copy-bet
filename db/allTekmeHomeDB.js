const Tekma = require('./tekma');
const Removed_Tekma = require('./removed_tekma');

async function getAllTekmeHomeDB() {

    let return_array = [];

    let tekmas = await Tekma.find();
    let removed_tekmas = await Removed_Tekma.find({ dalijeproslo: { $ne: "neodluceno" } });

    return_array.push(tekmas);
    return_array.push(removed_tekmas);

    return return_array;
}

module.exports = getAllTekmeHomeDB;