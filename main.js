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
		var newWord = str.replace('m', '');
		console.log(newWord);
		return newWord
	}

	removeM('family');
	removeM('memory');
	
});