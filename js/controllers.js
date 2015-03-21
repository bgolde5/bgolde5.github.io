var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {
	$http.get('/js/projects.json').success(function (data) {
		$scope.project = data;
	});
}]);

myApp.controller('MyController2', function MyController2($scope) {
	$scope.project = {
		name: 'regex.png'
	}
});