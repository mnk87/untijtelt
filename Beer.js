class Beer{
  constructor(name, size){
    this.name = name;
    this.size = size;
  }

  printString(){
    console.log('Dit bier heet: ' + this.name + ' en het flesje bevat ' + this.size + ' ml.');
  }
}

module.exports = Beer;
