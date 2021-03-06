/**
 * Created by Osvaldo on 3/21/2016.
 */
var listaRecetas = [];
var cont = 1;
main.controller('controllerCreateRecipe', function ($scope, factoryRecipeList, $localstorage, $window, $state, $ionicViewService, factoryRecipeLocalStorage,$cordovaCamera) {
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
    listaRecetas.push({
      id: cont++,
      title: $scope.recipe.nombre,
      ingredientes: $scope.listIngredient,
      description: $scope.recipe.descripcion,
      difficulty: $scope.recipe.difficulty,
      //img:$scope.pictureUrl
    });

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
