
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

/*
pokemon.species = pokeDetail.species
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    pokemon.abilities = pokeDetail.abilities

    const eggGroups = pokeDetail.egg_groups.map((eggGroupSlot) => eggGroupSlot.name)
    const [eggGroup] = eggGroups

    pokemon.eggGroups = eggGroups
    pokemon.eggGroup = eggGroup

    const stats = pokeDetail.stats.map((statSlot) => statSlot.base_stat)
    const [hp, atk, def, spAtk, spDef, speed] = stats

    pokemon.hp = hp
    pokemon.atk = atk
    pokemon.def = def
    pokemon.spAtk = spAtk
    pokemon.spDef = spDef
    pokemon.speed = speed
    pokemon.total = (hp+atk+def+spAtk+spDef+speed) - ((hp+atk+def+spAtk+spDef+speed)/(3,35/100))
    */