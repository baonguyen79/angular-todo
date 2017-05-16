app.controller("ItemListCtrl", function($scope, ItemFactory) {
   $scope.items = [];

    ItemFactory.getItemList().then((itemz) => {
      $scope.items = itemz;
      console.log("item", itemz);
    }).catch((error) => {
      console.log("get error" , error)
    });
 
});