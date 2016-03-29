/**
 * Created by Osvaldo on 3/28/2016.
 */
main.controller('controllerFavoriteRecipe', function ($scope, factoryRecipeList) {
$scope.recipes=factoryRecipeList.getRecipe();
});
