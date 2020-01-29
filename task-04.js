`use strict`

const formatString = function ( string ) {
    const array = string.split( `` );
    return array.length < 40 ? string : array.length = 40, array.join( `` );
};

console.log( formatString( 'Curabitur ligula sapien, tincidunt non.' ) );

console.log( formatString( 'Vestibulum facilisis, purus nec pulvinar iaculis.' ) );

console.log( formatString( 'Curabitur ligula sapien.' ) );

console.log( formatString( 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.' ) );