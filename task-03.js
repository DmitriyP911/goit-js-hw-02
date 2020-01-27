`use strict`

const findLongestWord = function ( string ) {
    const array = string.split( ` ` );
    let word = 0;
    let longestWord;
    for( let elem of array ) {
        let wordLeng = elem.length;
        if( wordLeng > word ) {
            word = wordLeng;
            longestWord = elem;
        }
    }
    return longestWord;
}

console.log( findLongestWord( 'The quick brown fox jumped over the lazy dog' ) ); // 'jumped'

console.log( findLongestWord( 'Google do a roll' ) ); // 'Google'

console.log( findLongestWord( 'May the force be with you' ) ); // 'force'