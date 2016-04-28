main.controller('controllerListMyRecipe', function ($scope,$state ,$localstorage, $location,$rootScope, factoryRecipeLocalStorage) {
  $scope.recipes =  $localstorage.getObject("listMyRecipe");
  $scope.data = {
    showDelete: false
  };

//$scope.goView=function(id1){
//  $location.url("app.modifyRecipe");
//  //$state.go('app.modifyRecipe',{id :id1});
//};
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDeleteitem = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };


  $scope.onItemDelete = function(item) {
    $scope.recipes.splice($scope.recipes.indexOf(item), 1);
    $localstorage.setObject("listMyRecipe",$scope.recipes);
  };
});
