main
  .factory("factoryRecipe", function ($http) {
    return {
      getRecipe: function () {
        $http.get("https://pure-anchorage-66530.herokuapp.com/").then(function (response) {
          console.log(response.data);
          return response.data;
        })
      }
    }

  })
  .factory("factoryRecipeList", function () {
    var list = [
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/ff19e63c9762b83e/640x640sq70/photo.jpg",
        id: 1,
        title: "POLLO TROCEADO AL CURRY",
        ingredientes: ["muslos de pollo deshuesados", "1 cebolla", "2 ajos", "2 cucharaditas de curry", " unos pimientos verdes"],
        description: "Trocear los muslos o contramuslos de pollo, salar y freir ,Añadir la cebolla picada, los ajos laminados los pimientos y pochar 8 minutos,Añadir el curry, mezclar bien....y servir...",
        difficulty: 1
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/3ce740f7e9989116/640x640sq70/photo.jpg",
        id: 2,
        title: "Pollo asado",
        ingredientes: ["pollo limpio", "3 dientes de ajo", " perejil, comino y orégano ,Sal y pimienta", " 4 cucharadas de vinagre de manzana", " unos pimientos verdes", " 2 cucharadasaceite de oliva"],
        description: "Metemos los ingredientes en el vaso y programamos 30 segundos a velocidad 6. Reservamos. Abrimos el pollo por el centro (por la parte de la pechuga) con un cuchillo y untamos el majado por el mismo. Reservamos unas 2 horas a temperatura ambiente para que coja los sabores. Precalentamos el horno a 180º e introducimos la bandeja con el pollo encima. Horneamos durante 90 minutos. Pasados los primeros 15 minutos echamos la mitad de la taza de vino blanco. Pasados otros 15 ponemos el resto. A medida que vaya avanzando la cocción, sacaremos la bandeja para extraer el jugo y rociarlo de nuevo. De esta manera no se secará.Podemos añadir también unas patatas para que se horneen junto con el pollo. Colocaremos las patatas pasada la primera media hora de cocción. ¡ A disfrutar",
        difficulty: 2
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/d8da4d5dc1f8e52b/640x640sq70/photo.jpg",
        id: 3,
        title: "Pollo a la naranja",
        ingredientes: ["naranja", "cebolla", "pechuga de pollo", "aceite", " sal", " pimienta negra"],
        description: "Para empezar, cortamos la cebolla a la juliana, finita, y la ponemos en la sartén. La dejamos poco tiempo que esté hecha pero que no llegue a dorarse. Cuando la cebolla esté lista introducimos la pechuga. La dejamos hasta que se dore. Exprimimos la naranja, cuando la pechuga se haya dorado, echamos el zumo de naranja, la sal y la pimienta. Lo dejamos a fuego lento y vamos volteando la pechuga, ya que el zumo no la cubrirá entera. Cuando se consuma el caldo apagamos el fuego y ¡lista para comer!",
        difficulty: 2
      }
      ,
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/8f6452b15e866913/640x640sq70/photo.jpg",
        id: 4,
        title: "Albóndigas en salsa",
        ingredientes: ["½ kg carne picada de pollo", "½ vaso leche", "1 huevo", " 2 dientes de ajo", " perejil", "miga de pan", "250 grms de bacon en tiras"],
        description: "AÑADIMOS AL PICADO LA LECHE, EL HUEVO, EL AJO, LA MIGA DE PAN, EL PEREJIL Y MEZCLAMOS TODO BIEN. FORMAREMOS BOLAS QUE PASAREMOS POR HARINA Y DESPUES FREIREMOS.EN UNA SARTEN POCHAMOS LAS TIRAS DE BACON .A CONTINUACION AGREGAMOS LA NATA, EL QUESO PARMESANO Y CHORRIN DE COÑAC.PONEMOS DENTRO LAS ALBONDIGAS Y DEJAMOS COCER JUNTO UNOS MINUTOS",
        difficulty: 2
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/e8ad51bf891ee52a/640x640sq70/photo.jpg",
        id: 5,
        title: "Hamburguesa de carne de cocido",
        ingredientes: ["carne de cocido", "1 cebolla", "2 huevos", "perejil y ajo picado", "pan rallado"],
        description: "Picar la carne y triturar la cebolla. Mezclar y añadir las especias.Poner huevo y pure de patatas y mezclar. Dejar reposar 10 minutos. Hacer las hamburguesas y freir.",
        difficulty: 2
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/e32d3404d59c40a1/640x640sq70/photo.jpg",
        id: 6,
        title: "Arroz Integral",
        ingredientes: ["1 cebolla grande","1 puerro","3 ajos","50-100 g arroz integral","50 cl limón","1 poco sal"],
        description: "Se coge una olla con 2 litros de agua, se le añaden la cebolla a trozos y el puerro a rodajas, 3 ajos laminados después de pelarlo. Se lleva a ebullición, hasta que hierve, se le añade el arroz integral previamente lavado para quitar el almidón en un colador. Se cuece 30 a 45 min.",
        difficulty: 1,

      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/1251994cfad3005e/640x640sq70/photo.jpg",
        id: 7,
        title: "Pincho de bacon",
        ingredientes: ["Lonchas de Bacon", "Rodajas de pan", "Pimentón dulce"],
        description: "Echamos en una sarten unas gotas de aceite y freimos el bacon. Lo colocamos encima del pan. Espolvoreamos con pimenton dulce o picante.",
        difficulty:1,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/7605084a63f3f742/640x640sq70/photo.jpg",
        id: 8,
        title: "Solomillo de ternera con manzanas",
        ingredientes: ["4 medallones de solomillo de ternera", "2 manzanas", "Sal", "pimienta molida"],
        description: "Pimentar la carne, sin salar. Esta carne, por su buena calidad, no necesita una preparación demasiado sofisticada.Derretir 2 cucharadas de mantequilla en una parrilla y calentar muy bien. Cuando humee poner la carne y dorar 3´ por cada lado a fuego fuerte.Pelar las manzanas y cortar en gajos no muy finos. Cocer en 2 cucharadas de mantequilla hasta que estén doradas pero que queden enteras. Servir la carne espolvoreada con escamas de sal y acompañar con las manzanas.",
        difficulty:2,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/eee0baf7ea552ae4/640x640sq70/photo.jpg",
        id: 9,
        title: "Perdices en escabeche",
        ingredientes: ["3 perdices", "tomillo", "1 cebolla", "4 dientes de ajo", "8 bolas de pimienta", "un vaso de vinagre", "medio vaso de vino blanco y uno de agua", "2 zanahorias", "aceite", "hojas de laurel y sal"],
        description: "Se fríen las perdices y se reservan , en ese aceite ponemos la cebolla partida en juliana, los ajos , las zanahorias cortadas en rodajas , el tomillo, el laurel y se deja que se poche bien, ahora se le añaden las perdices , el vino ,el agua y vinagre y a cocer a fuego lento. Rectificar de sal cuando este listo",
        difficulty:1,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/aecaf6f23d61b091/640x640sq70/photo.jpg",
        id: 10,
        title: "Conejo al ajillo",
        ingredientes: ["1 conejo troceado", "ajos", "pimienta", "sal", "perejil", "vino blanco", "tomillo", "aceite de oliva"],
        description: "Se fríe el conejo salpimentado , se reserva y si hay mucho aceite retirar un poco, en ese aceite se fríen bastantes ajos picaditos , se pone el conejo, el tomillo y un buen chorro de vino blanco , si es necesario una pizca de agua se deja cocer hasta que se quede en su propio aceite se espolvorea con perejil y alos que le guste el picante no olviden ponerle una guindillita . Ya lo tenemos listo para comer",
        difficulty:2,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/654ef8abea118527/640x640sq70/photo.jpg",
        id: 11,
        title: "Arroz con leche",
        ingredientes: ["2 LitrosLeche Entera", "400 grArroz Redondo (SOS)", "200 grAzucar Blanco","La piel de un Limón","RamaCanela"],
        description: "En una olla pones la leche, la piel de limón (solo la parte amarilla, la parte blanca amarga), y la rama de canela partida para que de mas sabor, dejamos que hierva. Cuando esté hirviendo echamos el azúcar y el arroz, y vamos removiendo bien al principio y al final para que no se pegue a la olla.Lo dejaremos cocer sin prisas sobre unos 30min a fuego lento, cuando veamos que el arroz esté casi cocido lo sacamos y con su propio calor se termina de hacer. Dejar que se vaya todo el calor y luego meterlo en la nevera durante 2 horas en moldes cómodos para comer, si se desea se puede echar canela por encima y ya tendremos listo",
        difficulty:1,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/5df95582ab1050f6/640x640sq70/photo.jpg",
        id: 12,
        title: "Arroz meloso con pollo y alcachofas",
        ingredientes: ["1/2Pollo troceado","4 Alcachofas","100 grJudias verdes plana", "3Tomates maduro rallado","300 grArroz","1 Dienteajo","1 Cucharadita pimentón","1 Pizca azafran o colorante","6 Cucharadas aceite de oliva virgen extra","Sal","1/2 litro de agua"],
        description: "Trocear el pollo y las verduras. En una olla, echar el aceite y sofreir el pollo y añadirle sal. Cuando este el pollo doradito añadir el ajo bien picadito, añadimos las alcachofas y las judias. Cuando estan bien rehogadas les añadimos el pimentón y el tomate rallado y seguimos cocinando unos 4 minutos. Echamos el litro y medio de agua y dejamos cocer 15 minutos a fuego fuerte, bajamos y dejamos 10 minutos más. Añadimos el arroz y cocemos 15 minutos. Listo para comer",
        difficulty:2,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/1bc1519cedf93ebf/640x640sq70/photo.jpg",
        id: 13,
        title: "Brownie al microondas de chocolate con nueces",
        ingredientes: ["3 huevos","125 gramos mantequilla sin sal","125 gramos chocolate en pepitas para fundir VALOR","1 sobre levadura en polvo","70 gramos harina de trigo", "100 gramos azúcar blanco","1 cucharada colacao","3 cucharadas soperas leche semidesnatada","1 puñado nueces picaditas"],
        description: "En el microondas metemos la mantequilla y las pepitas de chocolate a que se fundan.En el bol de la batidora batimos muy bien los huevos con el azúcar.En un bol a parte ponemos la harina con el colacao y la levadura y mezclamos.Añadimos las 3 cucharadas de leche en el bol de la batidora donde tenemos los huevos con el azúcar. Añadimos luego todo lo que tenemos de harina con colacao y levadura. Por último añadimos las nueces y mezclamos (no batimos). Preparamos el molde con mantequilla para que no se pegue y metemos en el microondas a potencia máxima 5 minutos y medio.",
        difficulty:2,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/77678b32e2381993/640x640sq70/photo.jpg",
        id: 14,
        title: "Bolitas de coco con leche condensada",
        ingredientes: ["Leche condensada","250grs Coco rallado","Moldes para las bolitas"],
        description: "Tenemos que mezclar 250g de coco rallado con la leche condensada hasta obtener una masa espesa. Luego, después de remover para obtener la dicha masa, hacemos con las manos las bolitas y las espolvoreamos en el coco rallado.Finalmente las colocamos en el molde, las metemos en el frigorífico y en un ratito de nada están listas para comer.",
        difficulty:1,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/b0759eec3f9c6004/640x640sq70/photo.jpg",
        id: 15,
        title: "Piña con nata montada",
        ingredientes: ["1 lata piña","250 g nata para montar","azúcar"],
        description: "Abrimos la lata piña, le ponemos la nata por encima y añadimos azúcar",
        difficulty:1,
      },
      {
        favorite:"ion-ios-star-outline",
        img:"https://img-global.cpcdn.com/002_recipes/1135166_f2ec2ebd801d4228/640x640sq70/photo.jpg",
        id: 16,
        title: "Postre de limón con leche condensada",
        ingredientes: ["1 bote pequeño leche condensada","4 yogures griegos","3 limones"],
        description: "Mezclar con varillas, a la nevera y decorar con galletita de limón y hoja de menta. Acompañar con más galletas de limón.",
        difficulty:1,
      },
    ];
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
    };
    return {
      getRecipe: function () {
        return list;
      },
      updateFavorite: function (recipe,icon) {
       list[recipe.id-1].favorite=icon;
      }
    };

  });
