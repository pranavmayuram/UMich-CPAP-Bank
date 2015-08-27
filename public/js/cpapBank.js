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

});

