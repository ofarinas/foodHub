/**
 * Created by Anuar on 18/04/2016.
 */
main.controller('controllerDiet', function ($scope,factoryDietList,factoryRecipeList, $localstorage,$stateParams) {
  var id = $stateParams.id;
  $scope.diet = factoryDietList.find(id);
  $scope.recipes = factoryRecipeList.getRecipe();
  $scope.recipesDiet = function () {
    var recipeList = [];
    for(var i = 0; i < $scope.diet.recetas.length; i++){
      var recipe = factoryRecipeList.find($scope.diet.recetas[i]);
      recipeList.push(recipe);
    }
    return recipeList;
  }
});
