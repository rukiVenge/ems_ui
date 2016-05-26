'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/state1");
	
	$stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "login1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "login1_list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "login2.html"
    })
    .state('state2.list', {
        url: "/list",
        templateUrl: "login2_list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      });
	
}]);
