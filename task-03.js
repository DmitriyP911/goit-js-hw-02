`use strict`

const findLongestWord = function ( string ) {
    const array = string.split( " " );
    let word = array[0];
    for( let elem of array ) {
        if( elem.length > word.length ) {
            word = elem;
        }
    }
    return word;
}

console.log( findLongestWord( 'The quick brown fox jumped over the lazy dog' ) ); // 'jumped'

console.log( findLongestWord( 'Google do a roll' ) ); // 'Google'

console.log( findLongestWord( 'May the force be with you' ) ); // 'force'