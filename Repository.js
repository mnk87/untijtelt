let Beer = require('./Beer.js');

class Repository{
  constructor(){
    this.beers = [];

  }

  save(beer){
    this.beers.push(beer);
  }

  async findAll(){
    let array = await this.beers;
    return array;
  }

  find(antwoord){
    let response;
    for(let beer of this.beers){
      if(beer.name === antwoord){
        response = 'gevonden: ' + beer.name + ' zit in de repository in een flesje van ' + beer.size + ' ml.';
        return response;
      }
    }
    throw new Error('niet gevonden');
  }


}



module.exports = Repository;
