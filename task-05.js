`use strict`

const checkForSpam = function ( message ) {
    const firstWrongWord = `spam`;
    const secondWrongWord = `sale`;
    const array = message.split( /\b/ );
    for( let i = 0; i < array.length; i++ ) {
        let wrongWord = array[i].toLowerCase();
        if( wrongWord === firstWrongWord || wrongWord === secondWrongWord ) {
            return true;
        }
    }
    return false;
};

console.log( checkForSpam( 'Latest technology news' ) ); // false

console.log( checkForSpam( 'JavaScript weekly newsletter' ) ); // false

console.log( checkForSpam( 'Get best sale offers now!' ) ); // true

console.log( checkForSpam( '[SPAM] How to earn fast money?' ) ); // true