class cards{
  constructor(viewContainer){
    this.viewContainer = viewContainer;
    this.form = document.querySelector('form');
    this.getAllCards = this.getAllCards.bind(this);
    this.getAllCards();
  }
  async getAllCards(){
  //  console.log('five times 20');
    const fetchOptions = {method: 'get'};
    const result = await fetch('/cardGather/', fetchOptions);
    const json = await result.json();
  //  console.log('json: ' + json);
    var accumulator = [];
    var x;
    for(x = 0; x < json.length; x++){
      accumulator.push([json[x].name, json[x].qty, json[x].rarity, json[x].Scryfall])
    }
    var noOfContacts = accumulator.length;

    if(noOfContacts>0){


      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.style.width = '100%';
      table.setAttribute('border', '1');
      table.setAttribute('cellspacing', '0');
      table.setAttribute('cellpadding', '5');

      // retrieve column header ('Name', 'Email', and 'Mobile')

      var col = []; // define an empty array
      for (var i = 0; i < noOfContacts; i++) {
        for (var key in accumulator[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }

      // CREATE TABLE HEAD .
      var tHead = document.createElement("thead");


      // CREATE ROW FOR TABLE HEAD .
      var hRow = document.createElement("tr");

      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      var th = document.createElement("th");
      th.innerHTML = "Name";
      hRow.appendChild(th);
      var th = document.createElement("th");
      th.innerHTML = "Quantity";
      hRow.appendChild(th);
      var th = document.createElement("th");
      th.innerHTML = "Rarity";
      hRow.appendChild(th);
      var th = document.createElement("th");
      th.innerHTML = "ScryFall Link";
      hRow.appendChild(th);

      tHead.appendChild(hRow);
      table.appendChild(tHead);

      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");

      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < noOfContacts; i++) {

          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


          for (var j = 0; j < col.length; j++) {
            var td = document.createElement("td");
            if(col[j] == 3){
              td.innerHTML = "<a href='"+accumulator[i][col[j]]+"'>"+accumulator[i][col[j]]+"</a>";
            }else{
              td.innerHTML = accumulator[i][col[j]];
            }
            bRow.appendChild(td);
          }
          tBody.appendChild(bRow)

      }
      table.appendChild(tBody);


      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("display");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);

    }
  }
}
