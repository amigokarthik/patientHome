var app = angular.module('patientApp', ['ngResource','ngRoute','firstmodule','secondmodule'])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "one.html",
    })
	.when("/pEntry", {
        templateUrl : "two.html",
		controller : 'first'
    })
	.when("/pDirectory", {
        templateUrl : "three.html",
		controller : 'second'
    });
});
