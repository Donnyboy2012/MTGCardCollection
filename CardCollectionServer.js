/* Card Collection Server */

const express = require('express')
const mongoose = require('mongoose')

const allRoutes = require('./routes/routes');

const Card = require('./models/cardSchema');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

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

app.use('/',allRoutes);
app.get('/',function(req,res){ res.render('home'); });

app.listen(3000,function(){ console.log('Server litsening'); });

async function getAllCards(req,res){
	var allCards = Card;
	let theseCards = await allCards.find();
	res.json(theseCards);
}
app.get('/cardGather/', jsonParser, getAllCards);

async function insertCard(req,res){

	var name = req.body.name.trim();
	var Scryfall = req.body.Scry.trim();
	var rarity = req.body.rarity;
	var qty = req.body.qty;

	const filter = {name: req.body.name};
	var theCard = Card;
	let thisCard = await theCard.findOne(filter);
	console.log("inserting card");
	if (thisCard === null){
		console.log('New Card being added.');
		thisCard = new Card ({
			name: name,
			Scryfall: Scryfall,
			rarity: rarity,
			qty: qty
		}).save().then((newCard) => {
			console.log('new Card: ' + newCard);
			res.json(newCard);
		});
	}else{
		console.log('Card exist update qty.')
		var qtyNew = Number(thisCard.qty) + Number(req.body.qty);
		console.log('qtyNew: ' + qtyNew);

		const update ={$set: {qty: qtyNew}};
		var theCard = Card;
		let myCard = await theCard.findOneAndUpdate(filter, update);
		res.json(myCard);
	}
}
app.post('/cardInsert', jsonParser, insertCard);


async function myTrim(x){
	return x.replace(/^\s+|\s+$/gm,'');
}
