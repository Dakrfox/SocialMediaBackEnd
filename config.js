module.exports={
    api:{
        port: process.env.PORT || 3000,
    }
    ,
    jwt:{
        secret : process.env.SECRET || 'secret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'user',
        password: process.env.MYSQL_PASS || 'password',
        database: process.env.MYSQL_DB || 'db',
        port: process.env.MYSQL_PORT || 3306
    },
}