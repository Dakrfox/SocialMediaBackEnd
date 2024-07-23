const TABLA = "users";
const auth = require("../auth");
const { nanoid } =  require("nanoid");

module.exports = function (db) {
  let store = db;
  if (!store) {
    store = require("../../../store/dummy")(db);
  }
  function getAll() {
    return store.getAll(TABLA);
  }

  function get(id) {
    return store.get(TABLA, id);
  }
  async function upsert(data) {
    const user = { name: data.name, username: data.username };
    if (data.id) {
      user.id = data.id;
    } else {
      user.id = nanoid();
    }
    if (data.password || data.username) {
      await auth.upsert(user);
    }

    return store.upsert(TABLA, user);
  }
  return { getAll, get, upsert };
};
