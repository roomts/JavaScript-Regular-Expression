const findByFieldRegex = ( field ) => ( regex, list ) =>
  list.filter( obj => obj[ field ].match( regex ) )

const findBy = ( field ) => ({
  [ field ]:  ( value ) => ({
    in: ( list ) => findByFieldRegex( field )( value, list )
  }),
  searchingFor:  ( value ) => ({
    in: ( list ) => findByFieldRegex( field )( value, list )
  }),
})


const list = [
  { id: 1, name: 'Rodrigo', email: 'Rodrigo@gmail.com' },
  { id: 2, name: 'Martins', email: 'Martins@joaomail.com' },
  { id: 3, name: 'Antonio', email: 'Antonio@joaomail.com' },
  { id: 4, name: 'Nascimento', email: 'Nascimento@joaomail.com' },
  { id: 5, name: 'John', email: 'John@gmail.com' }
]

const gmail = /@gmail.com/gi
const joaomail = /@joaomail.com/gi

console.log( 'gmail: ', findBy( 'email' ).email( gmail ).in( list ) )
console.log( 'joaomail: ', findBy( 'email' ).searchingFor( joaomail ).in( list ) )