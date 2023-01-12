// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(sumArray){
    var output = 0;
    for (var i=0;i<sumArray.length;i++){
    	if (Array.isArray(sumArray[i])){
    		output += SumSquares(sumArray[i])
    	} else {
    		output +=  sumArray[i]*sumArray[i]
    	}
    }
    return output;
}

var l = [1,2,3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[1,2],3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[[[[[[[[1]]]]]]]]]
console.log(SumSquares(l)); // 1 = 1
l = [10,[[10],10],[10]]
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400