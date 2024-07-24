module.exports={
    api:{
        port: process.env.PORT || 3000,
    }
    ,
    jwt:{
        secret : process.env.SECRET || 'secret'
    }
}