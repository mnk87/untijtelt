const Beer = require('./Beer.js');
const Repository = require('./Repository.js');


let repo = new Repository();

repo.save(new Beer('Mort Subite', 350));
repo.save(new Beer('Peroni', 350));
repo.save(new Beer('Hertogh Jan', 500));

(async() => {
  let array = await repo.findAll();

  for(let beer of array){
    console.log(beer.printString());
  }
  try {
    console.log(repo.find('Hertogh Jan'));
    console.log(repo.find('Jupiler'));
  }
  catch (e) {
    console.log(e);
  }

})();
