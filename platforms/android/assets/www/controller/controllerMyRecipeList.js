main.controller('controllerListMyRecipe', function ($scope, $localstorage, $state,$rootScope, factoryRecipeLocalStorage) {
  $scope.recipes =  $localstorage.getObject("listMyRecipe");
});
