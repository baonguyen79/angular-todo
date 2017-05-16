app.controller("ItemCtrl" , ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.dog = "Woof";
	// $scope.showListView = true;
	
      //   {
      //     id: 0,
      //     task: "mow the lawn",
      //     isCompleted: true,
      //     assignedTo: "Callan",
      //   },
      //   {
      //     id: 1,
      //     task: "grade quizzes",
      //     isCompleted: false,
      //     assignedTo: "Lauren",
      //   },
      //   {
      //     id: 2,
      //     task: "take a nap",
      //     isCompleted: false,
      //     assignedTo: "Zoe",
      //   }
      // ];

	$scope.newItem = () => {
		$scope.showListView = false;
	}

	$scope.allItems = () => {
		$scope.showListView = true;
	};


  


  









});