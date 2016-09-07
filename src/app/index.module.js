
(function () {
	
	'use strict';
	
	angular.module('angularBoilerplate', ['ngRoute', 'ngCookies', 'ngSanitize', 'ui.calendar']).config(config);
	config.$inject = ['$routeProvider', '$locationProvider'];
	
	function config($routeProvider, $locationProvider) 
	{
		$routeProvider
			.when('/', {controller : 'MainController', templateUrl : 'app/main/main.html', controllerAs : 'main'})
			
			.otherwise({redirectTo: '/'});
	}

}) ();
