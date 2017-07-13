angular.module('starter.controllers', [])

  .controller('LoginCtrl', [
    '$scope', '$state', '$timeout', 'FirebaseDB',
    function LoginCtrl($scope, $state, $timeout, FirebaseDB) {
      console.log("Login Controller");

      /**
       *
       */
      $scope.doLoginAction = function (_credentials) {

        FirebaseDB.login(_credentials).then(function (authData) {
          console.log("Logged in as:", authData.uid);
          $state.go('tab.chats', {})
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error("Authentication failed:", error);
          // ...
        });

      }

      /**
       *
       */
      $scope.doCreateUserAction = function (_credentials) {

        FirebaseDB.createUser(_credentials).then(function (authData) {
          console.log("Logged in as:", authData);
          $state.go('tab.chats', {})
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error("Authentication failed:", error);
          // ...
        });

      }
    }])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
