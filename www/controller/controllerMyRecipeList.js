main.controller('controllerListMyRecipe', function ($scope, $localstorage, $state,$rootScope, factoryRecipeLocalStorage) {
  $scope.recipes =  $localstorage.getObject("listMyRecipe");
  $scope.data = {
    showDelete: false
  };

  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    console.log(fromIndex+" "+toIndex);
    $scope.recipes.splice(fromIndex, 1);
    $scope.recipes.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    $scope.recipes.splice($scope.recipes.indexOf(item), 1);
    $localstorage.setObject("listMyRecipe",$scope.recipes);
  };
});
