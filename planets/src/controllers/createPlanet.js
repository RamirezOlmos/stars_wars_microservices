//const Planet = require('../data');
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  //const newPlanet = await Planet.create();
  const bodyData = req.body;
  const newPlanet = await axios.post("http://database:8004/Planet", bodyData);
  //const newPlanet = await axios.post("http://localhost:8004/Planet", bodyData);
  response(res, 201, newPlanet.data);
};
