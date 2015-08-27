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
			// could have nested views here for each stat?
			// OR could have just one html page
		})

	$urlRouterProvider.otherwise('/mission');

});

cpapBank.run(function ($rootScope) {
	$rootScope.sitename = "U of M CPAP Bank";
});

cpapBank.controller('AppCtrl', function ($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
});