const NEWS_CATEGORIES1 = {
    "Arts" : {
        "parentUri" : "dmoz",
        "uri": "f7629718-40ac-4ef9-bd7a-ccddfa8aa2d0" 
    },
    "Computers" : {
        "parentUri" : "dmoz",
        "uri" : "a2aa976e-a54e-4a62-a867-dd29d8270f36"
    },
    "Cibersecurity" : {
        "parentUri" : "news",
        "uri" : "b220679c-95ff-4e4e-a1fa-ad8b3905b7df"
    },
    "Ukraine-Rusia" : {
        "parentUri" : "news",
        "uri" : "3966b7ee-ea98-451c-a3c7-95d7cc896b2b"
    },
    "Sustainability" : {
        "parentUri" : "news",
        "uri" : "240f6a12-b9d8-40a6-b1c6-a220e31d08de"
    },
    "news/Blockchain" : {
        "parentUri" : "news",
        "uri" : "2aa115a6-d949-4cf9-a9cc-b06a7546b663"
    },
    "news/Enviroment" : {
        "parentUri" : "news",
        "uri" : "46770e04-1a2a-4ed2-b961-056d051ce949"
    },
    "news/Business" : {
        "parentUri" : "news",
        "uri" : "026ae6ec-133c-4060-b7bc-1564deff003b"
    },
    "news/Sports" : {
        "parentUri" : "news",
        "uri" : "a2aa976e-a54e-4a62-a867-dd29d8270f36"
    }
}


const NEWS_CATEGORIES = [
    {
        label : "dmoz/Arts",
        parentUri : "dmoz",
        uri : "f7629718-40ac-4ef9-bd7a-ccddfa8aa2d0"
    },
    {
        label : "news/Cibersecurity",
        parentUri : "news",
        uri : "b220679c-95ff-4e4e-a1fa-ad8b3905b7df"
    },
    {
        label : "news/Ukraine-Rusia",
        parentUri : "news",
        uri : "3966b7ee-ea98-451c-a3c7-95d7cc896b2b"
    },
    {
        label : "news/Sustainability",
        parentUri : "news",
        uri : "240f6a12-b9d8-40a6-b1c6-a220e31d08de"
    },
    {
        label : "news/Blockchain",
        parentUri : "news",
        uri : "2aa115a6-d949-4cf9-a9cc-b06a7546b663"        
    },
    {
        label : "news/Enviroment",
        parentUri : "news",
        uri : "46770e04-1a2a-4ed2-b961-056d051ce949"
    },
    {
        label : "news/Business",
        parentUri : "news",
        uri : "026ae6ec-133c-4060-b7bc-1564deff003b"
    },
    {
        label : "news/Sports",
        parentUri : "news",
        uri : "a2aa976e-a54e-4a62-a867-dd29d8270f36"
    }
]

const fetchCategory = ( getCategory, categories ) => {
    /*Esa función toma como parametros la categoria seleccionada por el usuario (getCategory)
    y las categorias de las noticias (categories) y devuelve la uri de la categoria seleccionada */

    let category = 0;
    let props = 0;

    for (category; category <= categories.length; category++){
        for (props; props <= categories[category].length; props++){
            if ( category[props].label === getCategory.category){
                return categories[props].uri;
            }
        }
    }
    return null; //En caso de no obtener ningún valor
}