const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getHobbies: (__, { userId }) => {
            return db("hobbies").where({ userId });
        },
    },
    Mutation: {
        addHobby: async (parent, { userId }, _) => {
            // function
        },
        updateHobby: async (parent, { userId }, _) => {
            // function
        },
    },
};
