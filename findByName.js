// O método find() retorna um valor no array, se algum elemento no array satisfazer a função de teste provida. Caso contrario undefined é retornado.
// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const findByField = ( field ) => ( value, list ) =>
  list.find( obj => obj[ field ] === value )

const findByName = ( value ) => ({
  in: ( list ) => findByField( 'name' )( value, list )
})

const list = [
  { id: 1, name: 'Rodrigo' },
  { id: 2, name: 'Martins' }
]

console.log( 
  findByName( 'Rodrigo' ).in( list ) // { id: 1, name: 'Suissa' }
) 