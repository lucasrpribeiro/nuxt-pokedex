<script setup lang="ts">

const {data, pending, error } = useGetPokemonByRegion('2')

console.log(data.value)

const pokemons = computed(() => data.value.pokemon_entries)

</script>

<template>
  <div class="flex items-center flex-wrap justify-center gap-3 bg-red-500 text-white text-3xl font-bold">
    <PokeCard v-for="pokemon in pokemons" :name="pokemon.pokemon_species.name" />
  </div>
</template>
