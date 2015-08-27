var cpapBank = angular.module('cpapBank', ['ngMaterial','ui.router']);

cpapBank.config(function ($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {
	
	$stateProvider
	
		.state('mission', {
			url: '/mission',
			templateUrl: 'html/mission-partial.html'
		})

		.state('cpapInfo', {
			url: '/cpapInfo',
			templateUrl: 'html/cpapInfo-partial.html'
		})

		.state('donate', {
			url: '/donate',
			templateUrl: 'html/donate-partial.html'
		})

		.state('aid', {
			url: '/aid',
			templateUrl: 'html/aid-partial.html'
		})

		.state('drSchotland', {
			url: '/drSchotland',
			templateUrl: 'html/drSchotland-partial.html'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'html/contact-partial.html'
		})

	$urlRouterProvider.otherwise('/mission');

	$mdThemingProvider.theme('new')
    	.primaryPalette('blue', {
        'default': '900' }) // by default use shade 900 from the grey palette for primary intentions
    	.accentPalette('amber',  {
    	'default': '600' })
    	.warnPalette('red');
	/*$mdThemingProvider.theme('default')
		.primaryPalette('red')
		
		.dark();*/
	$mdThemingProvider.setDefaultTheme('new');

});

cpapBank.run(function ($rootScope) {
	
	$rootScope.sitename = "U of M CPAP Bank";
	$rootScope.colorHex = "#0D47A1";

});

cpapBank.controller('AppCtrl', function ($scope, $mdSidenav){
	
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

});

cpapBank.controller('donateController', function ($scope, $http, $window, $state){
	
	$scope.machineTypes=["CPAP", "BiPAP", "auto-CPAP", "auto-BiPAP", "ASV", "AVAPS"];
	$scope.years=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, '50+'];

	$scope.printHiName = function (someObject) {
		console.log(someObject);
		console.log('Hi ' + someObject.name + '!');
	};

});

