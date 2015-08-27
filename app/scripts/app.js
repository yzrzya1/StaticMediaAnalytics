'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('yoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/nyt', {
        templateUrl: 'views/nyt.html',
        controller: 'NytCtrl',
        controllerAs: 'nyt'
      })
      .when('/hp', {
        templateUrl: 'views/hp.html',
        controller: 'HpCtrl',
        controllerAs: 'hp'
      })
      //.when('/about', {
      //  templateUrl: 'views/about.html',
      //  controller: 'AboutCtrl',
      //  controllerAs: 'about'
      //})
      .otherwise({
        redirectTo: '/'
      });
  });

app.controller("indexCtrl", function ($scope) {
  var d = new Date();
  $scope.navTime = d.toDateString();
});
