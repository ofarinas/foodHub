/**
 * Created by Osvaldo on 3/21/2016.
 */

main.controller('controllerRecipe', function ($scope,factoryRecipeList, $localstorage,$stateParams) {
  var id = $stateParams.id;
  $scope.recipe = factoryRecipeList.find(id);
  $scope.changeIcon = function () {
    if ($scope.recipe.favorite == "ion-ios-star-outline") {
      $scope.recipe.favorite = "ion-ios-star";
    }
    else {
      $scope.recipe.favorite = "ion-ios-star-outline";
    }
  }
});
