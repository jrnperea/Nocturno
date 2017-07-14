angular.module('starter.controllers', [])

.controller('LoginCtrl', [
  '$scope', '$state', '$timeout', 'FirebaseDB',
  function LoginCtrl($scope, $state, $timeout, FirebaseDB) {
    console.log("Login Controller");
    $scope.resr = false;
    $scope.regMessage = "";
    $scope.regMessageShow = false;
    $scope.resetMessage = "";
    $scope.resetMessageShow = false;
    $scope.loginMessage = "";
    $scope.loginMessageShow = false;


    $scope.doLoginAction = function (_credentials) {
      FirebaseDB.login(_credentials)
      .then(function (authData) {
        console.log("Logged in as:", authData.uid);
        $state.go('tab.chats', {})
      })
      .catch(function (error) {
        $scope.loginMessageShow = true;
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Authentication failed:", error);
        switch(errorCode){
          case 'auth/invalid-email':
            $scope.loginMessage = "El formato de email no es valido.";
            break;
          case 'auth/argument-error':
            $scope.loginMessage = "El formato de email no es valido.";
            break;
          case 'auth/user-not-found':
            $scope.loginMessage = "Correo electrónico o contraseña incorrecto";
            break;
          case 'auth/wrong-password':
            $scope.loginMessage = "Correo electrónico o contraseña incorrecto";
            break;
          case 'auth/email-already-in-use':
            $scope.loginMessage = "El correo electrónico ya se encuentra registrado.";
            break;
        }
        console.error("Authentication failed:", error);
        $scope.$apply();
        $timeout(function() {
          $scope.loginMessageShow = false;
          $scope.$apply();
        },3000);
      });
    }

    $scope.doCreateUserAction = function (_credentials) {
      FirebaseDB.createUser(_credentials).then(function (authData) {
        console.log("Logged in as:", authData);
        $state.go('tab.chats', {})
      }).catch(function (error) {
        $scope.regMessageShow = true;

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        switch(errorCode){
          case 'auth/invalid-email':
            $scope.regMessage = "El formato de email no es valido.";
            break;
          case 'auth/email-already-in-use':
            $scope.regMessage = "El correo electrónico ya se encuentra registrado.";
            break;
        }
        console.error("Authentication failed:", error);
        $scope.$apply();
        $timeout(function() {
          $scope.regMessageShow = false;
          $scope.$apply();
        },3000);

      });

    }

    $scope.doResetPassword = function (_credentials) {

      console.log("Reset data creds:", _credentials.email);
      FirebaseDB.resetPassword(_credentials).then(function (authData) {
        $scope.resr = true;
        $scope.$apply();
        console.log("Reset done");
        //$state.go('tab.chats', {})

      }).catch(function (error) {
        $scope.resetMessageShow = true;
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Reset failed failed:", error);

        switch(errorCode){
          case 'auth/invalid-email':
            $scope.resetMessage = "El formato de email no es valido.";
            break;
          case 'auth/user-not-found':
            $scope.resetMessage = "El correó electrónico no está asociado a una cuenta.";
            break;
        }
        console.error("Authentication failed:", error);
        $scope.$apply();
        $timeout(function() {
          $scope.resetMessageShow = false;
          $scope.$apply();
        },3000);

      });

    }





  }])

.controller('DashCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope, $timeout, Chats, FirebaseDB, $state) {

  $scope.doLogout = function () {
    $timeout(function () {
      $state.go('login', {})
    }, 1);
    firebase.auth().signOut()
  }



  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatsCtrl', function($scope, $timeout, Chats, FirebaseDB, $state) {

  $scope.doLogout = function () {
    $timeout(function () {
      $state.go('login', {})
    }, 1);
    firebase.auth().signOut()
  }



  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams,$timeout, Chats, FirebaseDB, $state) {
  $scope.chat = Chats.get($stateParams.chatId);


  $scope.doLogout = function () {
    $timeout(function () {
      $state.go('login', {})
    }, 1);

    firebase.auth().signOut()
    console.log("Saliendo ...");

  }
})


.controller('ChatDetailCtrl', function($scope, $stateParams,$timeout, Chats, FirebaseDB, $state) {
  $scope.chat = Chats.get($stateParams.chatId);


  $scope.doLogout = function () {
    $timeout(function () {
      $state.go('login', {})
    }, 1);

    firebase.auth().signOut()
    console.log("Saliendo ...");

  }
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
    enableFriends: true
  };

//
  $scope.validateEmail = function(email) {
    var pattern = new RegExp(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/);
    return pattern.test(email);
  };

  $scope.validatePassword = function(pass) {
    if(pass.length >7){
      return true;
    }
    else return false;
  };


  $scope.doLogout = function () {
    $timeout(function () {
      $state.go('login', {})
    }, 1);
    console.log("Saliendo ...");
    return firebase.auth().signOut()
  };

});
