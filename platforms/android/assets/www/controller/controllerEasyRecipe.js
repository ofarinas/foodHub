main.controller('controllerEasyrecipe', function ($scope, factoryRecipeList) {
  var recipes = factoryRecipeList.getRecipe();
  var easyList = [];
  for (var i = 0; i < recipes.length; i++) {
    if (recipes[i]["difficulty"] == 1&&i<=10) {
      easyList.push(recipes[i]);
    }
  }
  $scope.list = easyList;
  console.log(JSON.stringify(easyList));
});
