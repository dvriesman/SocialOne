'use strict';

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	if (window.location.hash === '#_=_') window.location.hash = '#!';
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});


ApplicationConfiguration.registerModule('core');

angular.module("core").controller('BasicController', ['$scope','$http', function ($scope, $http) {
	
	console.log('fora core');
	$http.get("/misc/user").success(function(data) {
		console.log('user ok');
		$scope.user = data.userAuthentication.details.name;
		$scope.authenticated = true;
	}).error(function() {
		console.log('user no ok');
		$scope.user = "N/A";
		$scope.authenticated = false;
	});

	$scope.logout = function() {
		$http.post('logout', {}).success(function() {
			console.log('adsfdas');
			$scope.authenticated = false;
			$location.path("/");
		}).error(function(data) {
			console.log("Logout failed")
			$scope.authenticated = false;
		});
	};
    
}]);
