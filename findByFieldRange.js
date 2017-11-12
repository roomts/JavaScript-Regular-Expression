const findByFieldRange = ( field ) => ( range, list ) =>
  list.filter( obj => 
    obj[ field ] >= range[ 0 ] && 
    obj[ field ] <= range[ 1 ] )

const findObjectsBetweenIds = ( ...range ) => ({
  in: ( list ) => findByFieldRange( 'id' )( range, list )
})

const list = [
  { id: 1, name: 'Suissa' },
  { id: 2, name: 'Jean' },
  { id: 3, name: 'Carlo' },
  { id: 4, name: 'Nascimento' }
]

const result = findObjectsBetweenIds( 1, 3 ).in( list )

console.log( result )