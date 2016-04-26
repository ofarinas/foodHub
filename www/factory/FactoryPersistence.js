main.factory('$localstorage', function($window,$rootScope ) {
  //angular.element($window).on('storage', function(event) {
  //  if (event.key === 'listMyRecipe') {
  //    $rootScope.$apply();
  //  }
  //});
  var id = 1;
  return {

    getId : function () {
      return id;
    },

    increaseId : function () {
      id++;
    },

    set: function(key, value) {
      $window.localStorage[key] = value;

    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      console.log(key);
      var variable=$window.localStorage[key];
      if($window.localStorage[key]==null)return null;
      return JSON.parse(variable);
    }
  }
});
