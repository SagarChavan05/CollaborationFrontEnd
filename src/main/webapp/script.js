	var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/job', {
				templateUrl : 'pages/job.html',
				controller  : 'jobController'
			})
			
			.when('/login', {
				templateUrl : 'pages/login.html',
				controller  : 'loginController'
			})
			
			.when('/newsfeeds', {
				templateUrl : 'pages/newsFeed.html',
				controller  : 'newsFeedsController'
			})
			
			.when('/blog', {
				templateUrl : 'pages/blog.html',
				controller  : 'blogController'
			})

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		$scope.message = 'This is index Page!';
	});

	myApp.controller('blogController', function($scope) {
		$scope.message = 'This is blog Page!.';
	});
	
	myApp.controller('lobinController', function($scope) {
		$scope.message = 'This is blog Page!.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us Page!';
	});
	
	myApp.controller('jobController', function($scope) {
		$scope.message = 'This is Job Page.';
	});
	
	myApp.controller('newsFeedsController', function($scope) {
		$scope.message = 'News Feeds Page.';
	});