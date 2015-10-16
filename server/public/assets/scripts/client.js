/**
 * Created by gfrethem on 10/14/15.
 */
var app = angular.module('MegaPrez', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateURL: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateURL: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/rank', {
            templateURL: 'views/rank.html',
            controller: 'RankController'
        });

    $locationProvider.html5Mode(true);
});