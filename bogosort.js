function shuffle(array){
	var m =  array.length - 1, t, i;

	while(m){
		i = Math.floor(Math.random() * m--);

		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

function isSorted(array){
	for(var i = 1; i < array.length; i++){
		if(array[i-1] > array[i]){
			return false;
		}
	}
	return true;
}

function BogoSort(array){
	var sorted = false;
	while(sorted == false){
		array = shuffle(array);
		sorted = isSorted(array);
	}
	return array;
}

var test = [3,5,6,1];

console.log(BogoSort(test));
