var app = angular.module('DirectoryApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'DirectoryController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

