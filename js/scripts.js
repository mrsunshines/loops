var p = prompt('Declare tree height, please.');

function drawTree(p) {
	for (var i = 0; i < p; i++) {
		var star = '';
		for (var j = 0 ; j <= i; j++) {
			star += '*'; 
		}
	console.log(star);
	}
}
drawTree(p);