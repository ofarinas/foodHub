main.controller('controllerListRecipe', function ($scope, factoryRecipeList, $localstorage) {
  listaRecetas=$localstorage.getObject("listMyRecipe");
  $scope.ok = true;
  $scope.recipes = factoryRecipeList.getRecipe();
});
