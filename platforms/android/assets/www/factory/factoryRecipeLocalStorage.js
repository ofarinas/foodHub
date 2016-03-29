main.factory('factoryRecipeLocalStorage', function ($localstorage, $rootScope) {
  var tem = true;
  return {
    getList: function () {
      if (tem) {
        listaRecetas = $localstorage.get('listMyRecipe');
        return listaRecetas;
      }
      else {
        tem = false;
        return listaRecetas;

        }
      }
      ,

        setObject: function (key, value) {
          listLocaLStorage = value;
          $rootScope.listMyRecipe = listLocaLStorage;
          $localstorage.setObject(key, value);
        }
      ,
        getObject: function (key) {
          listLocaLStorage = $localstorage.get(key);
          $rootScope.listMyRecipe = listLocaLStorage;
          return listLocaLStorage;
        }
      }
    }
  );
