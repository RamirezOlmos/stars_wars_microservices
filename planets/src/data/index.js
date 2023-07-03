const planets = require('./planets.json');


module.exports = {
  list: async () => {
    return planets;
  },

  create: async () => {
    throw Error('There was an error int he DB creating the planet');

  }
}
