main.controller('controllerListRecipe', function ($scope, factoryRecipeList, $localstorage) {
  listaRecetas=$localstorage.getObject("listMyRecipe");
  $scope.ok = true;
  $scope.recipes = factoryRecipeList.getRecipe();
  $scope.updateList = function () {
    $scope.ok = false;
    $scope.recipes = factoryRecipeList.getRecipe();
  };
});
