/* Card Collection Server */

const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/', express.static('views'))

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/myMTGCollection',()=> {
	console.log('connected to mongodb');
});

app.get('/',function(req,res){ res.render('home'); });

app.listen(3000,function(){ console.log('Server litsening'); });
