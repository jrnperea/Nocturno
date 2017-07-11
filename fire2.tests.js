'use strict';

describe('Controller: LoginCtrl', function () {

	var $scope, LoginCtrl, FirebaseDB, $timeout, $state;

	beforeEach(function () {

		module('starter.controllers');

		module(function ($provide) {
			$provide.factory('FirebaseDB', function () {
          return true;
			});
			$provide.factory('$timeout', function () {
        return true;
			});
			$provide.factory('$state', function () {
        return true;
			});
		});

		inject(function (_$scope_,$controller, _FirebaseDB_, _$timeout_, _$state_) {
			$scope = $rootScope.$new();
			FirebaseDB = _FirebaseDB_;
			$timeout = _$timeout_;
			$state = _$state_;

			LoginCtrl = $controller('LoginCtrl', {
				$scope: $scope
			});
		});

	});

	// Specs here
  // it('should have multiply', function(){
   //  var pass = "holamundo"
   //  expect(scope.validatePassword(pass)).toEqual(true);
  // });
  //


});
