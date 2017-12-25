$.getJSON("data/bitcoin.11-17.json", function(allJSON){
	console.log(allJSON)
	xDateArray = ["x"], lowArray = ["low"], highArray = ["high"], volumeArray = ["volume"];
	
/*	// TODO
	// populate xDateArray, lowArray, highArray
	for(i = 0; i < allJSON.dataset.data.length; i++){
	//date = allJSON.dataset.data[i][0];
	xDateArray.push(allJSON.dataset.data[i][0])
	}
//console.log(xDateArray);
	for(j = 0; j < allJSON.dataset.data.length; j++){
	//lowDate = allJSON.dataset.data[j][3];
	lowArray.push(allJSON.dataset.data[j][3])
}

	for(k = 0; k < allJSON.dataset.data.length; k++){
	//highDate = allJSON.dataset.data[k][2];
	highArray.push(allJSON.dataset.data[k][2])
}
*/

for(i = 0; i < allJSON.dataset.data.length; i+=7){

	if(parseInt(allJSON.dataset.data[i][0]) > 2014){
		xDateArray.push(allJSON.dataset.data[i][0]);
		lowArray.push(allJSON.dataset.data[i][3]);
		highArray.push(allJSON.dataset.data[i][2])
		volumeArray.push(allJSON.dataset.data[i][5])
}
}


	var chart = c3.generate({
		bindto: "#bitcoin-chart",
		data: {
			x: 'x',
			xFormat: '%Y-%m-%d',
			columns: [
				xDateArray,
				highArray,
				lowArray,
				volumeArray
			]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			}
		}
	});
});