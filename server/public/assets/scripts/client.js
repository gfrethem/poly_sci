/**
 * Created by gfrethem on 10/14/15.
 */

var app = angular.module('MegaPrez', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller: 'HomeController'
        })
        .when('/about',{
            templateUrl:'views/about.html',
            controller: 'AboutController'
        })
        .when('/rank', {
            templateUrl: 'views/rank.html',
            controller: 'RankController'
        });

    $locationProvider.html5Mode(true);
});
