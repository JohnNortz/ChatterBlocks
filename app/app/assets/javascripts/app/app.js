//= require_self
//= require ./chatDirectives.js

(function() {
  var app = angular.module('chat', ['chat-directives']);

  app.controller('chatController', ['$scope', '$http', function($scope, $http) {

    $scope.tiles = [
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 2,
        "y": 1
      },
      {
        "x": 1,
        "y": 2
      },
      {
        "x": 2,
        "y": 2
      }
    ];

    $http.get("/tiles").success(function(data) {
      $scope.tiles = data.tiles;
      console.log($scope.tiles);
    });

    console.log("hit the controller");
  }]);
})();
