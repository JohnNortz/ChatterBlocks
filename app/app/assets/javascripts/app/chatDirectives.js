(function(){
  var app = angular.module('chat-directives', []);

  app.directive("chatTile", function() {
    return {
      restrict: 'E',
      templateUrl: '<%= asset_path "app/templates/tile.html" %>'
    };
  });

})();
