
	// Declare app level module which depends on views, and components
	angular.module('myApp', [
	  'ui.router',
	]).
	config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/state1');
		
		$stateProvider
	    .state('state1', {
	      url: '/state1',
	      templateUrl: 'module/login/view/login1.html',
	      controller: 'LoginController'
	    })
	    .state('state1.list', {
	      url: '/list',
	      templateUrl: '/module/login/view/login1_list.html',
	      controller: function($scope) {
	        $scope.items = ["A", "List", "Of", "Items"];
	      }
	    })
	    .state('state2', {
	      url: '/state2',
	      templateUrl: '/module/login/view/login2.html'
	    })
	    .state('state2.list', {
	        url: '/list',
	        templateUrl: '/module/login/view/login2_list.html',
	        controller: function($scope) {
	          $scope.things = ["A", "Set", "Of", "Things"];
	        }
	      });
		
	}]);
