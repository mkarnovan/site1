var newsApp = angular.module('newsApp', []);
newsApp.controller('NewsCtrl', function ($scope, $http) {
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
	};

	$scope.remove = function(index) {
		var _id = $scope.news[index].id;
		$http.delete('http://localhost:3000/api/news/' + _id);
		$scope.news.splice(index, 1);
	};

	$scope.sendIdNew = function (ind) {
		var data = {
			id_new: 1
		}
		data.id_new = ind
		var postItems = JSON.stringify(data);
		$http.post('http://localhost:3000/api/detail', postItems);
	};

})

newsApp.controller('DetailCtrl', function  ($scope, $http) {
	$scope.detail = {
		id_new: 1,
		title: 'text',
		description: 'text'
	}


	$http.get('http://localhost:3000/api/detail')
	.success((request) => {
		$scope.detail.id_new = request.data[0].id_new;
		$http.get('http://localhost:3000/api/news/' + $scope.detail.id_new)
		.success((request) => {
			$scope.detail.title = request.data.title;
			$scope.detail.description = request.data.description;	
			var _id = $scope.detail.id;
			console.log($scope.detail.title);
			$http.delete('http://localhost:3000/api/detail/'+ $scope.detail.id_new);
			$scope.detailTitle = $scope.detail.title;
		})
	})
	
	$scope.getDetailDescription = function () {
		return $scope.detail.title;
	}
});


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