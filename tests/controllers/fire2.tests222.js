'use strict';

describe('Factory: FirebaseDB', function () {

	var FirebaseDB, $timeout, $state, $q;

	beforeEach(function () {

		module('starter.services');

		module(function ($provide) {
			$provide.factory('$timeout', function () {

			});
			$provide.factory('$state', function () {

			});
			$provide.factory('$q', function () {
        return true;
			});
		});

		inject(function (_FirebaseDB_, _$timeout_, _$state_, _$q_) {
			FirebaseDB = _FirebaseDB_;
			$timeout = _$timeout_;
			$state = _$state_;
			$q = _$q_;
		});
	});

	// Specs here
  /*
	it('should return a property value', function () {
	  var cres= {email: '', password: ''};
	  cres.email="jadgus@gmail.com";
	  cres.password="colombia";
		expect(FirebaseDB.login(cres)).toBe('true');
	});
w
	it('should return a method value', function () {
		expect(FirebaseDB.baz()).toBe('qux');
	});
	*/

});
