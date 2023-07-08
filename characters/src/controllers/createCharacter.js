//const Character = require("../data");
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const bodyData = req.body;
  const newCharacter = await axios.post(
    "http://database:8004/Character",
    bodyData
  );
  response(res, 201, newCharacter.data);
};
