/**
 * Created by Anuar on 19/04/2016.
 */

main.controller('controllerModifyRecipe',  function ($scope,  $stateParams, factoryRecipeList, $localstorage, $window, $state, $ionicViewService, factoryRecipeLocalStorage,$cordovaCamera) {
  var index=$scope.index= $stateParams.id;
  var count = -1;
  $scope.index=index;
  var recipe = $localstorage.getObject("listMyRecipe")[index];
  $scope.recipe={};
  fillCreateRecipe(recipe);
  $scope.mensaje=function(){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      //allowEdit: true,
      quality:100,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation:true
    };
    $cordovaCamera.getPicture(options).then(
      function(data){
        $scope.pictureUrl="data:image/jpeg;base64,"+data;
      },function(error){
        console.log("error");
      }
    );
  };
  $scope.addIngredient = function (ingredientes) {
    $scope.listIngredient.push(angular.copy(ingredientes));
    $scope.recipe.ingredientes = "";
  };
  $scope.removeIngredient = function (index) {
    delete $scope.listIngredient.splice(index, 1);
  };
  $scope.save = function (recipe) {
    listaRecetas[$scope.index]={
      id: $scope.index,
      title: $scope.recipe.nombre,
      ingredientes: $scope.listIngredient,
      description: $scope.recipe.descripcion,
      difficulty: $scope.recipe.difficulty,
      //img:$scope.pictureUrl
    };
    $localstorage.setObject("listMyRecipe", listaRecetas);
    cleanCreateRecipe($scope);
    $ionicViewService.nextViewOptions({disableBack: true});
  };
  function fillCreateRecipe(recipe) {
    $scope.recipe.nombre=recipe.title;
    $scope.recipe.description=recipe.descripcion;
    $scope.recipe.difficulty=recipe.difficulty;
    if(recipe.ingredientes!=null)
    $scope.listIngredient=recipe.ingredientes;
    $scope.pictureUrl="";

  }
});
function cleanCreateRecipe($scope) {
  $scope.recipe.descripcion = "";
  $scope.recipe.ingredientes = "";
  $scope.recipe.nombre = "";
  $scope.listIngredient = [];
  $scope.pictureUrl="";
}
