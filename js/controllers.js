var myApp = angular.module('myApp', []);

myApp.controller('ThumbNails', ['$scope', '$http', function ($scope, $http) {
	$http.get('/js/projects.json').
	success(function (data) {
		$scope.projects = data;
	});
}]);

myApp.controller('ProgressBars', ['$scope', '$http', function ($scope, $http) {
	$http.get('/js/experience.json').
	success(function (data) {
		$scope.languages = data;
	});
}]);

myApp.controller('Modals', ['$scope', '$http', function ($scope, $http) {
	$http.get('/js/modal.json').
	success(function (data) {
		$scope.languages = data;
	});
}]);
