main.controller('controllerMyDietDescription', function ($scope,factoryDietList,factoryRecipeList, $localstorage,$stateParams) {
  var index = $stateParams.id;
  $scope.diet =$localstorage.getObject("listDiet")[index];
  $scope.recipes = factoryRecipeList.getRecipe();
  $scope.recipesDiet = function () {
    var recipeList = [];
    for(var i = 0; i < $scope.diet.recetas.length; i++){
      var recipe = factoryRecipeList.find($scope.diet.recetas[i]);
      recipeList.push(recipe);
    }
    return recipeList;
  };

  function find(list,id) {
    for (var i = 0; i < list.length; i++) {
      if (id == i) return list[i];
    }
    return -1;
  }
});
