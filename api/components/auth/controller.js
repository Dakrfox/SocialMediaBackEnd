const TABLA = "auth";
const auth = require("../../../auth/index");
const bcrypt = require("bcrypt");


module.exports = function (db) {
  let store = db;
  if (!store) {
    store = require("../../../store/dummy")(db);
  }
  async function login(username, password) {
    const data = await store.query(TABLA, { username: username });
    return bcrypt.compare(password, data.password)
      .then((res) => {
        if (res) {
          return auth.sign(data);
        } else {
          throw new Error("Informacion invalida");
        }
      } 
        )
        .catch((err) => {
          throw new Error("Informacion invalida");
        });
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    };
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 10); // data.password;
    }
    return store.upsert(TABLA, authData);
  }

  return { upsert, login };
};
