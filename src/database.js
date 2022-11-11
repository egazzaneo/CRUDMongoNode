const { connect } = require("mongoose");

try {
  connect("mongodb+srv://tester:tester123@cluster0.zylpzkc.mongodb.net/menu")
    .then((db) => console.log("Conectado a la DB", db.connection.name))
    .catch((err) => console.log(err));
} catch (e) {
  console.log(e);
}
