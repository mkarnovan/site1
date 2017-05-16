function NewsCtrl ($scope) {
	$scope.news = [
	{text: 'Title', description:'Description'}, 
	]; 

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

		$scope.news.push({text:$scope.fromTodoTitle, description: $scope.fromTodoDescription});
		$scope.fromTodoTitle = '';
		$scope.fromTodoDescription = '';
	}

    $scope.remove = function(index) {
    	$scope.news.splice(index, 1);
    };
}