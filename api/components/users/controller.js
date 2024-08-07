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
    const user = { name: data.name, username: data.username, password: data.password };
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

  function follow (from, to ) {
    return store.upsert(TABLA + '_follow', {
      user_from: from,
      user_to: to
    })
  }

  function following (user) {
    const join = {}
    join[TABLA] = 'user_to';
    const query = {
      user_from: user
    }
    return store.query(TABLA + '_follow', { user_to: id })
  }

  return { getAll, get, upsert, follow };
};
