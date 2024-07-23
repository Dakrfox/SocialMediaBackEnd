const TABLA = "auth";
const auth = require("../../../auth/index");


module.exports = function (db) {
  let store = db;
  if (!store) {
    store = require("../../../store/dummy")(db);
  }
  async function login(username, password) {
    const data = await store.query(TABLA, { username: username });
    console.log(data.password,"---", password);
    if (data.password === password) {
      return auth.sign(data);
    } else {
      throw new Error("Informacion invalida123");
    }
  }

  function upsert(data) {
    const authData = {
      id: data.id,
    };
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = data.password;
    }
    return store.upsert(TABLA, authData);
  }

  return { upsert, login };
};
