main.controller('controllerMyDietList', function ($scope, $localstorage, $state, $rootScope, factoryRecipeLocalStorage) {
  $scope.dietas =  $localstorage.getObject("listDiet");
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
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDeleteitem = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.onItemDelete = function(item) {
    $scope.dietas.splice($scope.dietas.indexOf(item), 1);
    $localstorage.setObject("listDiet",$scope.dietas);
  };

});
