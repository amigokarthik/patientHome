(function(){
var module = angular.module('firstmodule',[]);
app.controller('first', ['$scope', '$resource','$location','$filter', function ($scope, $resource, $location,$filter) {

//$scope.firstName="";
$scope.$watch("firstName",function(Value){
if(typeof Value != "undefined")
	if(!Value.match(/^[a-zA-Z]+$/g))
	{
		$scope.firstnameValid = true;
	}
	else{
		$scope.firstnameValid = false;
	}
		//console.log(Value);
		
});

$scope.$watch("lastName",function(Value){
if(typeof Value != "undefined")
	if(!Value.match(/^[a-zA-Z]+$/g))
	{
		$scope.lastnameValid = true;
	}
	else{
		$scope.lastnameValid = false;
	}
		//console.log(Value);
		
});


$scope.Gender = ["Male", "Female", "Other"];

$scope.createMeetup = function () {
	
var phone = document.getElementById("phone").value;
var age = document.getElementById("age").value;
	
$scope.date = new Date(document.getElementById("dob").value);
	var resGajala = $resource('./index.bak.php', {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});

var input = {"fn":$scope.firstName,"ln":$scope.lastName,"dt":$scope.date,"age":age,"gender":$scope.gender,"phone1":phone,"notes":$scope.notes};
resGajala.save(input,function(response){

		var data = Object.keys(response);
$scope.data = "";
		for(var i = 0;i<data.length-2; i++){
			$scope.data = $scope.data+response[data[i]];
		}
});
                    
                    $location.url('/');

 $scope.firstName=" ";
$scope.lastName=" ";
$scope.date=" ";
$scope.age=" ";
$scope.gender=" ";
$scope.phone1=" ";
$scope.notes=" "; 
}	

}]);
})();