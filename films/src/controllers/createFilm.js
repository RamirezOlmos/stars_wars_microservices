//const Film = require('../data');
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  //const newFilm = await Film.create();
  const bodyData = req.body;
  const newFilm = await axios.post("http://database:8004/Film", bodyData);
  //const newFilm = await axios.post("http://localhost:8004/Film", bodyData);
  response(res, 201, newFilm.data);
};
