/**
 * Created by Anuar on 18/04/2016.
 */
main.controller('controllerListDiet', function ($scope, factoryDietList, $localstorage) {
  $scope.diets = factoryDietList.getDiet();
});
