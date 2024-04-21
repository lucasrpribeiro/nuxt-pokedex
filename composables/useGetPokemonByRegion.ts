export function useGetPokemonByRegion(region: string) {
  const baseURL = 'https://pokeapi.co/api/v2/pokedex/'
  const method = 'GET'

  const { data, pending, error } = useFetch(region, {
    baseURL,
    method
  })

  return {
    data,
    pending,
    error
  }
}