const Beer = require('./Beer.js');
const Repository = require('./Repository.js');


let repo = new Repository();

repo.save(new Beer('Mort Subite', 350));
repo.save(new Beer('Peroni', 350));
repo.save(new Beer('Hertogh Jan', 500));

(async() => {
  try {
    let array = await repo.findAll();

    for(let beer of array){
      beer.printString();
    }
    repo.find('Hertogh Jan');
    repo.find('Jupiler');




  } //einde try block
  catch (e) {
    console.log(e);
  }

})();// einde anonieme async functie
