var Mammal = function (name) {
  this.name = name;
};

Mammal.prototype.get_name = function (){
  return this.name;
};

Mammal.prototype.says = function (){
  return this.saying || '';
};

//make an instance
var myMammal = new Mammal("Herb the Mammal");
//var name = myMammal.get_name();

//next pseudoclass
var Dog = function(name){
  this.name = name;
  this.saying = "ruff";
};

Dog.prototype = new Mammal();


Dog.prototype.get_name = function () {
  return this.says()+" "+this.name;
};

var max = new Dog("Max");
console.log(max.get_name());