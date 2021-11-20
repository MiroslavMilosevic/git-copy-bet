const User_message = require('./user_message');

async function writeUserMessageDB(username, message_text) {

    let user_message = new User_message({

        username: username,
        message_text: message_text,
        description: "some description"
    });

    let res = await user_message.save()
    return res;
}

module.exports = writeUserMessageDB;
