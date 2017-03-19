function dropElements(arr, func) {

	var index = arr.findIndex(func);

	arr = arr.slice(index);

	if (index !== -1) {
		return arr;

	} else {
		return [];
	}


	return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; }));