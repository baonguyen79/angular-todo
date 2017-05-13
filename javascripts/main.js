app.run((FIREBASE_CONFIG) => {              //run config from AppConstants.js
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("NavCtrl", ($scope) => {
	$scope.cat = "Meow";
	$scope.navItems= [{name: "logout"}, {name: "All Items"} , {name: "New Item"}];
});

app.controller("ItemCtrl" , ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.dog = "Woof";
	$scope.showListView = true;
	 $scope.items = [
        {
          id: 0,
          task: "mow the lawn",
          isCompleted: true,
          assignedTo: "Callan",
        },
        {
          id: 1,
          task: "grade quizzes",
          isCompleted: false,
          assignedTo: "Lauren",
        },
        {
          id: 2,
          task: "take a nap",
          isCompleted: false,
          assignedTo: "Zoe",
        }
      ];

	$scope.newItem = () => {
		$scope.showListView = false;
	}

	$scope.allItems = () => {
		$scope.showListView = true;
	};


  let getItemList = () => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
      .then((fbItems) => {
          let itemCollection = fbItems.data;
          Object.keys(itemCollection).forEach((key) => {
            itemCollection[key].id=key;
            itemz.push(itemCollection[key]);
          });
          resolve(itemz);
      })
      .catch((error) => {
        reject(error);
      })
    });
  };


  let getItems = () => {
    getItemList().then((itemz) => {
      $scope.items = itemz;
      console.log("item", itemz);
    }).catch((error) => {
      console.log("get error" , error)
    });
  };

getItems();

let postNewItem = (newItem) => {
    return $q((resolve, reject) =>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
        .then((resultz) => {
          resolve(resultz);
        }).catch((error) => {
          reject(error);
        });
    });
  };



$scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    postNewItem($scope.newTask).then(() => {
      $scope.newTask = {};
      $scope.showListView = true;
      getItems();
    }).catch((error) => {
      console.log("Add error", error);
    });
  };







});