'use strict';

angular.module('myApp.dsr', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dsr', {
    templateUrl: 'dsr/dsr.html',
    controller: 'DSRCtrl'
  });
}])

.controller('DSRCtrl', [function() {

}]);