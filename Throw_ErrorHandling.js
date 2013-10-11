/*
	Exception Handling Block Example
*/

//creates Exception object
function TypeErrorException(){
  this.error = "TypeError";
  this.message = "Wrong Type for Arguments";
}

//creates function that sums up the arguments that are inputted,
//and also checks to make sure that the typeof the inputs is correct
//and if not it throws our Exception object we created above
function add(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new TypeErrorException();
  }else{
    return a+b;
  }
}

//now we actually use our function and our exception object if it is thrown,
//we can access our exception object and its properties that we set before
//through the e parameter that is sent to the catch block.
try{
 var result = add(1,2);
  console.log(result);
} catch(e){
  console.log("Error: "+e.error+" - "+e.message);
}

/*
	Exception Handling Block Example End
*/