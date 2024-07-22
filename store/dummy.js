const db = {
  users: [
    { id: 1, name: "Nicolas" },
    { id: 2, name: "Hector" },
    { id: 3, name: "Cristian" },
  ],
};

async function getAll() {
  return db.users;
}

async function get(id) {
  return db.users.find((user) => user.id === id);
}

async function upsert(user) {
  const id = user.id;
  const index = db.users.findIndex((user) => user.id === id);
  if (index > -1) {
    db.users[index] = user;
  } else {
    db.users.push(user);
  }
  return user;
}

async function remove(id) {
  const index = db.users.findIndex((user) => user.id === id);
  if (index > -1) {
    db.users.splice(index, 1);
  }
  return true;
}

module.exports = { getAll, get, upsert, remove };
