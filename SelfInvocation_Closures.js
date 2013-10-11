/*
	Self Invoking Functions with Closures
*/

var JOHNSAPP = (function(){
    var privatefunction = function () {
        alert('hello');
    }

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
  })();
  
JOHNSAPP.publicfunction();

/*
	Self Invoking Functions with Closures End
*/