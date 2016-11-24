(function(){
var module = angular.module('secondmodule',[]);
app.controller('second', ['$scope', '$resource','$location', function ($scope, $resource, $location) {
	var dp = $resource('./patientsr.php',{},{
	'query' : {
		method : 'GET',
		isArray : true
	}
	});
	dp.query(function(response){
		$scope.datap = [];
		for(var i = 0;i<response.length; i++){
			$scope.datap.push(response[i]);
		}
		console.log(response[0].firstname);
	});

}]);
})();