$.getJSON("data/populations.json", function(jsonData){
	var colData = [];

  // TODO
  // populate colData
  for(i = 0; i < jsonData.Armenia.length; i++){
  	colData.push([`${jsonData.Armenia[i].age.substring(0,2)} - ${jsonData.Armenia[i].age.substring(2,4)}`,jsonData.Armenia[i].value])
  }
	chart = c3.generate({
		bindto: "#population-chart",
		size: {
			height: 450
		},	
		data: {
			columns: colData,
			type : 'pie'
		}
	});	
});
