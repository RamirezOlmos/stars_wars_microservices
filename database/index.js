const server = require("./src/server");

// const { Character, Film } = require("./src/database");

// Character.getAll().then((res) => console.log(res[0]));

server.listen(8004, () => {
  console.log("Database service on PORT 8004");
});
