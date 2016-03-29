
/**
 * Created by Osvaldo on 3/21/2016.
 */
main.controller('controllerMyRecipe',function($scope,$stateParams,$localstorage,factoryRecipeLocalStorage){
  var id= $stateParams.id;
  $scope.recipe=find($localstorage.getObject("listMyRecipe"),id);
});


function find(list,id) {
  for (var i = 0; i < list.length; i++) {
    if (id == i) return list[i];
  }
  return -1;
}
