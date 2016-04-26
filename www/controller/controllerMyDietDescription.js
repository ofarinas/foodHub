main.controller('controllerMyDietDescription', function ($scope,factoryDietList,factoryRecipeList, $localstorage,$stateParams) {
  var id = $stateParams.id;
  $scope.dieta = find($localstorage.getObject("listDiet"),id);
  $scope.recipes = factoryRecipeList.getRecipe();
  $scope.recipesDiet = function () {
    var recipeList = [];
    for(var i = 0; i < $scope.dieta.recetas.length; i++){
      var recipe = factoryRecipeList.find($scope.dieta.recetas[i]);
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
