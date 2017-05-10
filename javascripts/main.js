var app = angular.module("TodoApp", []);

app.controller("NavCtrl", ($scope) => {
	$scope.cat = "Meow";
	$scope.navItems= [{name: "logout"}, {name: "All Items"} , {name: "New Item"}];
});

app.controller("ItemCtrl" , ($scope) => {
	$scope.dog = "Woof";

})