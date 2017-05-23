app.run(function(FIREBASE_CONFIG) {              //run config from AppConstants.js
  firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider) {
  $routeProvider
  .when('/items/list', {
     templateUrl: 'partials/item-list.html',
     controller: 'ItemListCtrl'
  })
  .when('/items/new' , {
     templateUrl: 'partials/item-new.html',
     controller: 'ItemNewCtrl'
  })
  .when('/item/view/:id', {              //:id variable
     templateUrl: 'partials/item-view.html',
     controller: 'ItemViewCtrl'
  })
  .when('/item/edit/:id', {
     templateUrl: 'partials/item-new.html',
     controller: 'ItemEditCtrl'
  })
  .when('/auth' , {
     templateUrl: 'partials/auth.html',
     controller: 'AuthCtrl'
  })
  .otherwise('/auth')
});
