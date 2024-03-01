const express = require ('express');
const port = (process.env.port || 3000);
const app = express();

app.set('port', port);
app.listen(app.set('port'));
console.log('Servidor funcionando');

const cors=require('cors');
app.use(express.json());
app.use(cors());

app.use('/r',require('./route/rutas'))
