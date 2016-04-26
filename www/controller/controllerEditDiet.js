/**
 * Created by Osvaldo on 3/21/2016.
 */
var listDiet = [];
var cont = 1;
main.controller('controllerEditDiet', function ($scope, factoryRecipeList, $localstorage, $window, $state, $ionicViewService,$stateParams,factoryDietList) {

  var index= $stateParams.index;
 var diet=$localstorage.getObject("listDiet")[0];
  $scope.index=0;
  $scope.diet = {};
  $scope.diet.difficulty = 2;
  $scope.diet.listRecipe = factoryRecipeList.getRecipe();
  $scope.diet.listSelectingRecipeName = [];
  $scope.diet.listSelectingRecipeId = [];
  fillCreateDiet(diet);

  $scope.addRecipe = function () {
    if (findRecipe($scope)) {
      $scope.diet.listSelectingRecipeName.push(angular.copy($scope.diet.selectedRecipe.title));
      $scope.diet.listSelectingRecipeId.push(angular.copy($scope.diet.selectedRecipe.id));
    }
  };
  $scope.removeIngredient = function (index) {
    delete $scope.diet.listSelectingRecipeName.splice(index, 1);
    delete $scope.diet.listSelectingRecipeId.splice(index, 1);
  };
  $scope.save = function (diet) {
    if (cont == 1)
      listDiet = $localstorage.getObject("listDiet");
    if (listDiet == null) {
      listDiet = [];
    }
    listDiet[$scope.index]={
      id: cont++,
      title: diet.nombre,
      recetas: $scope.diet.listSelectingRecipeId,
      description: diet.descripcion,
      difficulty: diet.difficulty
    };

    $localstorage.setObject("listDiet", listDiet);
    cleanCreateDiet($scope);
    $ionicViewService.nextViewOptions({disableBack: true});
  };
  function fillCreateDiet(diet) {
    $scope.diet.descripcion = diet.description;
    $scope.diet.nombre = diet.title;
    $scope.diet.listSelectingRecipeName = [];
    $scope.diet.listSelectingRecipeId = diet.recetas;
    $scope.diet.listSelectingRecipeName=createListRecipeTitle(diet.recetas)
  }
  function createListRecipeTitle (recipes) {
    var recipeList = [];
    for(var i = 0; i < recipes.length; i++){
      var recipe = factoryRecipeList.find(recipes[i]);
      recipeList.push(recipe.title);
    }
    return recipeList;
  }

  function cleanCreateDiet($scope) {
    $scope.diet.descripcion = "";
    $scope.diet.nombre = "";
    //$scope.diet.listRecipe = [];
    $scope.diet.listSelectingRecipeName = [];
    $scope.diet.listSelectingRecipeId = [];
    //$scope.diet.selectedRecipe = $scope.diet.listRecipe[0].title;
  }
  function findRecipe($scope) {
    for (var i = 0; i < $scope.diet.listSelectingRecipeId.length; i++) {
      if ($scope.diet.listSelectingRecipeId[i] == $scope.diet.selectedRecipe.id)return false;
    }
    return true;
  }
  function createListRecipe (recipes,factoryRecipeList) {
    var recipeList = [];
    for(var i = 0; i < recipes.length; i++){
      var recipe = factoryRecipeList.find($scope.diet.recetas[i].title);
      recipeList.push(recipe);
    }
    return recipeList;
  }
});



