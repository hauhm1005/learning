var a = ["1", "1", "2", "3", "3", "1"];
var unique = a.filter(function(item, i, ar){ 
	return ar.indexOf(item) === i; 
}); // ["1", "2", "3"]

//tạo array mới theo điều kiện