app.controller("ItemNewCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {

$scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    postNewItem($scope.newTask).then(() => {
      $scope.newTask = {};
      $scope.showListView = true;
      //switch view
    }).catch((error) => {
      console.log("Add error", error);
    });
  };
});
