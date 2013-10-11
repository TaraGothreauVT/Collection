function ParentClass(){
  this.parent_prop1 = "hola";
  this.parent_method1 = function (arg1){
      return arg1+" Parent method 1 return data...";
  }
}

function ChildClass(){
  this.child_prop1 = "adios";
  this.child_method1 = function (arg1){
      return arg1+" Child method 1 return data...";
  }
}
ChildClass.prototype = new ParentClass();

var instance1 = new ChildClass();

alert(instance1.parent_method1("stuff"));
alert(instance1.child_method1("more stuff"));