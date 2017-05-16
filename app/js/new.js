function NewsCtrl ($scope, $http) {
	$scope.news = []; 
	$http.get('http://localhost:3000/api/news')
	.success((request) => {
		for (var i=0; i<request.data.length; i++) {
			var title = request.data[i].title;
			var desc = request.data[i].description;
			var id = request.data[i].id;
			$scope.news.push({id: id, text: title, description: desc});
		}
	})

	$scope.getTotalTodos = function () {
		return $scope.news.length;
	}

	$scope.addTodo = function () {
		if(!$scope.fromTodoTitle){
			alert("Title is empty");
			return;
		}
		if(!$scope.fromTodoDescription ) {
			alert("Description is empty");
			return;
		}
		var data = {
			id_user: 1,
			title: $scope.fromTodoTitle,
			description: $scope.fromTodoDescription
		};
		var postItems = JSON.stringify(data);
		$http.post('http://localhost:3000/api/news', postItems);
		$scope.news.push({text:$scope.fromTodoTitle, description: $scope.fromTodoDescription});
		$scope.fromTodoTitle = '';
		$scope.fromTodoDescription = '';
	}

	$scope.remove = function(index) {
		var _id = $scope.news[index].id;
		$http.delete('http://localhost:3000/api/news/' + _id);
		$scope.news.splice(index, 1);
	};
}

const myApp = angular.module('loginApp', []);

myApp.controller('NewsUser', function ($scope, $http) {

	$scope.addUser = function () {
		if(!$scope.userLogin){
			alert("Login is empty");
			return;
		}
		if(!$scope.userPassword ) {
			alert("password is empty");
			return;
		}
		var data = {
			login: $scope.userLogin,
			password: $scope.userPassword
		};
		var postItems = JSON.stringify(data);
		$http.post('http://localhost:3000/api/users', postItems);
	}
});