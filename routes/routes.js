const router = require('express').Router();

router.get('/viewDecks', (req,res)=>{
  res.render('deckView');
});

router.get('/listCards', (req,res)=>{
  res.render('cardList');
});

router.get('/newCard', (req,res)=>{
  res.render('cardAdd');
});

router.get('/newDeck', (req,res)=>{
  res.render('deckCreate');
});

module.exports = router;
