class newCards{
  constructor(viewContainer){
    this.viewContainer = viewContainer;
    this.form = document.querySelector('form');
    this.enterNewCard = this.enterNewCard.bind(this);
  //  this.form.addEventLitsener('submit', this.enterNewCard());

  }
  async enterNewCard(){
    const nameN = document.getElementById('CardName').value;
    const scryfallN = document.getElementById('ScryFall').value;
    const qtyN = document.getElementById('Qty').value;
    const rarityN = document.getElementById('Rarity').value;
    console.log('name: '+ name);
    const params = {
      name: nameN,
			Scry: scryfallN,
			rarity: rarityN,
			qty: qtyN
    };
    console.log(params);
    const fetchOptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };
    const result = await fetch('/cardInsert', fetchOptions);
    const json = await result.json();
    console.log('json: ' + json);
  }
}
