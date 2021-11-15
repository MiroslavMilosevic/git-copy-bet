const User = require('./user');

async function addUserMongoDB(username, password, description, restricted_checkbox ){

    let restricted = 'no';
      console.log(restricted_checkbox);
    if( restricted_checkbox=='1'){
        restricted = 'yes';
    }
    const user = new User
    ({
    username:username,
    password:password,
    description: description,
    restricted:restricted
    });

     let saveResponse = await user.save();
     let usersAfterSave = await User.find();
    
     return usersAfterSave;
    
}

module.exports = addUserMongoDB;