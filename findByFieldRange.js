const findByFieldRange = ( field ) => ( range, list ) =>
  list.filter( obj => 
    obj[ field ] >= range[ 0 ] && 
    obj[ field ] <= range[ 1 ] )

const findObjectsBetweenIds = ( ...range ) => ({
  in: ( list ) => findByFieldRange( 'id' )( range, list )
})

const list = [
  { id: 1, name: 'Rodrigo' },
  { id: 2, name: 'Antonio' },
  { id: 3, name: 'Nascimento' },
  { id: 4, name: 'Martins' }
]

const result = findObjectsBetweenIds( 1, 3 ).in( list )

console.log( result )
