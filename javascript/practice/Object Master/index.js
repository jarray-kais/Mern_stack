const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    //un tableau d'objets Pokémon dont l'identifiant est divisible par 3
    const pkmnIds = pokémon.filter(p => p.id % 3 === 0);
    console.log(pkmnIds)
    //an array of pokémon objects that are "fire" type
    const bListPkmn = pokémon.filter( p => p.types.includes == "fire" );
    console.log(bListPkmn)
    //an array of pokémon objects that have more than one type
    const lenpkmn = pokémon.filter(p => p.types.length>=1);
    console.log(lenpkmn)
    //an array with just the names of the pokémon
    const pkmnname = pokémon.map(p => p.name);
    console.log(pkmnname)
    //an array with just the names of pokémon with an id greater than 99
    const name99 = pokémon.filter(p =>p.id >99).map(ele=>ele.name)// & pokémon.map(p => p.name);
    console.log(name99)
    const id = pokémon.map(item=>item.id).filter(ele=>ele>99)
    console.log(id)
    //an array with just the names of the pokémon whose only type is poison
    const namepoisson = pokémon.filter(item=>item.types.length===1 && item.types.includes('poisson')).map(ele=>ele.name)
    console.log(namepoisson)
    //an array containing just the first type of all the pokémon whose second type is "flying"
    const fly = pokémon.filter(item=>item.types[1]==="flying").map(ele=>ele.types[0])
    console.log(fly)
    //a count of the number of pokémon that are "normal" type
    




