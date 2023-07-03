const characters = require('./characters.json');


module.exports = {
  list: async () => {
    return characters;
  },

  create: async () => {
    throw Error('There was an error int he DB creating the character');

  }
}
