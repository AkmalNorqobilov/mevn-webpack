const express = require('express');
const morgan = require('morgan');
const app = express();


app.set('port', process.env.PORT|| 3001)
app.use(express.json());
app.use(morgan('dev'))
app.use(express.static(__dirname+"/public"))




app.listen(app.get('port'), ()=>{
    console.log(`ishladi ${app.get('port')}`);
})