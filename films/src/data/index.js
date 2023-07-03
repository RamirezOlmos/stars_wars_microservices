const films = require('./films.json');


module.exports = {
  list: async () => {
    return films;
  },

  create: async () => {
    throw Error('There was an error int he DB creating the film');

  }
}
