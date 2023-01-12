// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
var nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: 'foo2'
					}
				}
			}
		}
	}
}

function contains(obj, searchValue){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			return contains(obj[key], searchValue);
		}

		if (obj[key] === searchValue){
			return true;
		}
	}
	return false;
}

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, 'foo');