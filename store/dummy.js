const db = { user: [{ id: "1", name: "Carlos" }] };

async function getAll(tabla) {
  return db[tabla] || [];
}

async function get(id) {
  return db.users.find((user) => user.id === id);
}

async function upsert(tabla, data) {
  if (!db[tabla]) {
    db[tabla] = [];
  }
  db[tabla].push(data);
  console.log(db);
}
async function remove(id) {
  const index = db.users.findIndex((user) => user.id === id);
  if (index > -1) {
    db.users.splice(index, 1);
  }
  return true;
}

async function query(tabla, q) {
  let col = await getAll(tabla);
  let keys = Object.keys(q);
  let key = keys[0];
  return col.filter((item) => item[key] === q[key])[0] || null;
}
module.exports = { getAll, get, upsert, remove, query };
