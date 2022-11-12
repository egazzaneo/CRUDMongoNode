const { connect } = require("mongoose");

try {
  connect(
    `mongodb+srv://${process.env.APP_MONGO_USER}:${process.env.APP_MONGO_PASS}@${process.env.APP_MONGO_URI}/${process.env.APP_MONGO_DB}`
  )
    .then((db) => console.log("Conectado a la DB", db.connection.name))
    .catch((err) => console.log(err));
  // connect("mongodb+srv://tester:tester123@cluster0.zylpzkc.mongodb.net/menu")
  //   .then((db) => console.log("Conectado a la DB", db.connection.name))
  //   .catch((err) => console.log(err));
} catch (e) {
  console.log(e);
}
