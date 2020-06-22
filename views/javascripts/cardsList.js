class cards{
  constructor(viewContainer){
    this.viewContainer = viewContainer;
    this.form = document.querySelector('form');
    this.getAllCards = this.getAllCards.bind(this);
    this.getAllCards();
  }
  async getAllCards(){
    console.log('five times 20');
    const fetchOptions = {method: 'get'};
    const result = await fetch('/cardGather/', fetchOptions);
    const json = await result.json();
    console.log('json: ' + json);


  }
}
