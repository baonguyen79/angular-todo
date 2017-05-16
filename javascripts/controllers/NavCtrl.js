app.controller("NavCtrl", function($scope) {
	$scope.cat = "Meow";
	$scope.navItems= [{name: "logout"}, {name: "All Items"} , {name: "New Item"}];
});