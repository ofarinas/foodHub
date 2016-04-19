/**
 * Created by Anuar on 18/04/2016.
 */
main.controller('controllerDiet', function ($scope,factoryDietList,factoryRecipeList, $localstorage,$stateParams) {
  var id = $stateParams.id;
  $scope.diet = factoryDietList.find(id);
  $scope.recipes = factoryRecipeList.getRecipe();
});
