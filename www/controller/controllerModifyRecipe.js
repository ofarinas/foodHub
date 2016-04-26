/**
 * Created by Anuar on 19/04/2016.
 */
var listaRecetas = [];
var cont = 1;
main.controller('controllerModifyRecipe',  function ($scope,  $stateParams, factoryRecipeList, $localstorage, $window, $state, $ionicViewService, factoryRecipeLocalStorage,$cordovaCamera) {
  listaRecetas = $localstorage.getObject("listMyRecipe");
  $scope.title = listaRecetas[$stateParams.id].title;
  $scope.ingredientes = listaRecetas[$stateParams.id].ingredientes;
  $scope.description = listaRecetas[$stateParams.id].description;
  $scope.difficulty = listaRecetas[$stateParams.id].difficulty;
  $scope.img = listaRecetas[$stateParams.id].img;
  $scope.pictureUrl="";
  //$scope.mensaje=function(){alert("hola.")};
  $scope.recipe = {};
  $scope.recipe.difficulty=2;
  $scope.listIngredient = [];
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
    if (cont == 1)
      listaRecetas = $localstorage.getObject("listMyRecipe");
    cont = listaRecetas.length;
    if (listaRecetas == null) {
      listaRecetas = [];
    }
    listaRecetas[$stateParams.id]={
      id: $stateParams.id,
      title: recipe.nombre,
      ingredientes: $scope.listIngredient,
      description: recipe.descripcion,
      difficulty: recipe.difficulty,
      img:$scope.pictureUrl
    };

    $localstorage.setObject("listMyRecipe", listaRecetas);
    cleanCreateRecipe($scope);
    $ionicViewService.nextViewOptions({disableBack: true});

  };
});
function cleanCreateRecipe($scope) {
  $scope.recipe.descripcion = "";
  $scope.recipe.ingredientes = "";
  $scope.recipe.nombre = "";
  $scope.listIngredient = [];
  $scope.pictureUrl="";
}
