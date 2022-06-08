const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require ('body-parser');
const mysql = require('mysql');
const tasksRoutes = require('./routes/tasks');
const connection = require('express-myconnection');


const Sequelize = require('sequelize')

const app = express();
app.set('port', 8080);

app.use(bodyParser.urlencoded( {
    extended: true
}));
app.use(bodyParser.json());


app.set('views', __dirname +'/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');




app.use('/', tasksRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})


app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});