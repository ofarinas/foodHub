main
  .factory("factoryFavorites", function () {
    var list = [];
    return {
      getRecipe: function () {
        return list;
      },
      find: function (id) {
        for (var i = 0; i < list.length; i++) {
          if (id == list[i].id) return list[i];
        }
        return -1;
      }
    }
  });
