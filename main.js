$(document).on('ready', function() {
  
	// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
	
	var people = {name: 'Lee', age: 26};
	var getName = function(obj){
		console.log(obj.name);
		return obj.name
	}
	getName(people);
	
	// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
	var totalLetters = function(a){
		var together = a.join('');
		console.log(together.length);
		return together.length;
	}

	var things = ['this', 'is', 'so', 'fun'];
	totalLetters(things);
	totalLetters(['javascript', 'is', 'awesome']);
	totalLetters(['what', 'happened', 'to', 'my', 'function']);

	// Write a function called 'keyValue' which takes two arguments and returns an object with a key of the first argument and the value of the second argument.

	var keyValue = function(key, value){
		var Things = '{'+key+': "' + value + '"}';
		var newObject = Things
		console.log(newObject)
	}

	keyValue('city', 'Denver');

	// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.

	var negativeIndex = function(list, number){
		var newItem = list[list.length+number];
		console.log(newItem);
		return newItem

	}
	negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) 
	negativeIndex(['jerry', 'sarah', 'sally'], -1)


	// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function should return the new string.

	var removeM = function(str){
		var newWord = str
		while ((newWord.indexOf('m')) !== -1){
		newWord = newWord.replace('m', '')
		}
		console.log(newWord)
		return newWord
	};

	removeM('family');
	removeM('memory');


	// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.

	var printObject = function(object){
		for (var key in object){
			console.log(key + ' is ' + object[key])
		}
	}
	
	printObject({ firstName: 'pork', lastName: 'chops' });
	printObject({ a: 10, b: 20, c: 30 });




	// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.

	
	
	var vowels = function(str){
		var splitString = str.split('');
		var vowelCheck = function(n){
			return n === 'a' || n === 'e' || n === 'i' || n === 'o'
		|| n === 'u'		
		}	
		var splitArray = splitString.filter(vowelCheck);
		console.log(splitArray)
	}
	var aWord = 'monkey';

	vowels(aWord);
	vowels('alabama');
	vowels('What lets in youth?');

	// Write a function called 'twins' which takes an array and returns true if every pair of items in the array is the same.

	var twins = function(array){
		var i = 0
		while (i<array.length){
			if (array[i] !== array[i+1]){
				return false
			} else if(i<array.length-2) {
				i+=2
			} else {
				return true
			}
		}
	};

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c'])); 
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b'])); 
console.log(twins(['a', 'a', 'b', undefined]));

// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.

var or = function(array){
	var value = false;
	var i = 0;
	if(i === array.length){
		return false;
	}
	while (i < array.length && value === false){
		if (array[i] === true){
			return true
		} else if(array[i] === false && i < array.length-1) {
			value = false;
			i++
		} else {
			return false
		}
	}
}
console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).

var unique = function(array){
	var uniqueValues = [];
	for(var i = 0; i<array.length; i++){
		if (uniqueValues.indexOf(array[i]) === -1){
			uniqueValues.push(array[i]);
		} 
	};
	return uniqueValues;

}


console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));

});

