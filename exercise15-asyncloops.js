function loadUsers(userIds, load, done) {
    var complete = 0;
    var users = [];
    userIds.forEach((userId, index) => {
        load(userId, (user) => {
            if(user) {
                complete++;
                users[index] = user;
            }
            if(complete === userIds.length) {
                done(users);
            }
        })
    });
}

module.exports = loadUsers