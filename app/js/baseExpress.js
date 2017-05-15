const myApp = angular.module('newsApp', ['ui.router', 'ngAnimate', 'firebase']);

myApp.factory("Auth", ["$firebaseAuth",
  function ($firebaseAuth) {
    return $firebaseAuth();
  }
]);

myApp.controller("signInCtrl", function ($scope, $firebaseAuth, Auth, $state) {
  const auth = Auth;
  $scope.signIn = function () {
  	$scope.authclass = "";
    auth.$signInWithEmailAndPassword($scope.emailreg, $scope.password).then(function (firebaseUser) {
      console.log("Signed in as:", firebaseUser.uid);
      if (firebaseUser.uid == '3hUrF3TjT7VGq966A3hkruidZYJ2') {
        $state.go('admin'); // admin@admin.com qwerty
      } else {
        $state.go('secret');
      }
  	}).catch(function (error) {
  	  $scope.signUp();
    console.log("Authentication failed:", error);
  });
  };
  $scope.signUp = function () {
    auth.$createUserWithEmailAndPassword($scope.emailreg, $scope.password).then(function (firebaseUser) {
      console.log("Registered as:", firebaseUser.uid);
      $state.go('secret');
  	}).catch(function (error) {
  	  $scope.authclass = "wrongitem";
    console.log("Registration failed:", error);
  });
  };
});