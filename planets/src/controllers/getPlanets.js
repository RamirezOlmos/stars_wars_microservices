//const Planets = require('../data');
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  //const planets = await Planets.list();
  const planets = await axios.get("http://database:8004/Planet");
  //const planets = await axios.get("http://localhost:8004/Planet");
  response(res, 200, planets.data);
};
