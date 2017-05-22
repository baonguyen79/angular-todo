app.controller("ItemViewCtrl", function($location, $routeParams, $scope, ItemFactory)  {
  $scope.selectedItem = {};

  ItemFactory.getSingleItem($routeParams.id).then((results) => {
  	$scope.newItem = results.data;
  }).catch((error) => {
  	console.log("getSingleItem error", error);
  })

  $scope.addNewItem = () => {
  	ItemFactory.editItem($scope.newTask).then (() => {
  		$location.url('/item/list');
  	}).catch((error) => {
  		console.log("addNewItem error", error)
  	});
  };


});