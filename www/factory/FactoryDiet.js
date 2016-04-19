/**
 * Created by Anuar on 18/04/2016.
 */
main
  .factory("factoryDiet", function ($http) {
    return {
      getDiet: function () {
        $http.get("https://pure-anchorage-66530.herokuapp.com/").then(function (response) {
          console.log(response.data);
          return response.data;
        })
      }
    }

  })
  .factory("factoryDietList", function () {
    var list = [
      {
        favorite:"ion-ios-star-outline",
        id: 1,
        title: "Dieta Atkins",
        description: "Es una dieta baja en hidratos de carbono, ya que en la primera etapa sólo se manejan 20 g y en la segunda 25 g. Es alta en proteínas y grasas.",
        recetas: [1, 2, 3],
      },

      {
        favorite:"ion-ios-star-outline",
        id: 2,
        title: "Dieta volumétrica",
        description: "The Volumetrics Weight Control Plan (Dieta volumétrica de control de peso) es un plan que orienta para seleccionar alimentos de baja densidad, esto es bajos en calorías por porción de alimento y de gran volumen para bajar de peso. Asimismo, estos alimentos ayudan a sentirse con saciedad.",
        recetas: [7, 11, 15],
      },

      {
        favorite:"ion-ios-star-outline",
        id: 3,
        title: "Carb Lover",
        description: "Es un régimen de reducción de peso para aquellas personas que les encantan las pastas, el pan, el plátano y otros “carbohidratos” Mediante el consumo de “almidón resistente” que es una clase de hidrato de carbono presente en estos alimentos que actúa como fibra y utiliza las reservas de grasa del cuerpo.",
        recetas: [16, 1, 5],
      },

      {
        favorite:"ion-ios-star-outline",
        id: 4,
        title: "Dieta detox",
        description: "Esta dieta de reducción se basa en un régimen vegetariano a base de alimentos crudos e incluye suplementos.",
        recetas: [4, 6, 9],
      },

      {
        favorite:"ion-ios-star-outline",
        id: 5,
        title: "Dieta South Beach",
        description: "South Beach diet es una dieta baja en hidratos de carbono (no estricta), adecuada en proteínas y promueve el consumo de grasas buenas que protegen la salud cardiovascular. En esta dieta se seleccionan los alimentos que tienen hidratos de carbono en base a un índice glucémico bajo, que es una medida para controlar la glucosa en la sangre. De esta forma se controlan los arranques de hambre",
        recetas: [8, 12, 14],
      },

    ];
    return {
      getDiet: function () {
        return list;
      },
      find: function (id) {
        for (var i = 0; i < list.length; i++) {
          if (id == list[i].id) return list[i];
        }
        return -1;
      }
    };

  });
