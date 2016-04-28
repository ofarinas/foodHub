/**
 * Created by Osvaldo on 3/21/2016.
 */
var listDiet = [];
main.controller('controllerCreateDiet', function ($scope, factoryRecipeList, $localstorage, $window, $state, $ionicViewService, factoryRecipeLocalStorage, $cordovaCamera) {
var count = -1;
  $scope.diet = {};
  $scope.diet.difficulty = 2;
  $scope.diet.listRecipe = factoryRecipeList.getRecipe();
  $scope.diet.listSelectingRecipeName = [];
  $scope.diet.listSelectingRecipeId = [];

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
    listDiet = $localstorage.getObject("listDiet");
    if(listDiet==null&&count==-1){
      listDiet=[];
      count=0;}
    else count = listDiet.length;
    listDiet.push({
      id: count,
      title: diet.nombre,
      recetas: $scope.diet.listSelectingRecipeId,
      description: diet.descripcion,
      difficulty: diet.difficulty,
    });

    $localstorage.setObject("listDiet", listDiet);
    cleanCreateDiet($scope);
    $ionicViewService.nextViewOptions({disableBack: true});
  };
});
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
