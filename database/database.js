const sequelize = require('sequelize');

 sequelize = new Sequelize('crudenodejs', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
}, 'single');

