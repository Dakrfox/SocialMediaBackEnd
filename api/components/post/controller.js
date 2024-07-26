const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(id = null, user, text) {
        const newPost = {
            id: id,
            user: user,
            text: text
        };
        return store.upsert(TABLA, newPost);
    }

    function getByUser(id) {
        return store.query(TABLA, { user: id });
    }

    return {
        list,
        get,
        upsert,
        getByUser
        
    };
}