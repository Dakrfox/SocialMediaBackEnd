const TABLA = 'users';

module.exports = function(db){
   
        let store = db;
        if (!store) {
            store = require('../../../store/dummy')(db);
        }
        function getAll(){
            return store.getAll(TABLA);
        }

        function get(id){
            return store.get(TABLA, id);
        }
        return {getAll, get};
    
}