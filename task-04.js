`use strict`

const formatString = function ( string ) {
    const array = string.split( `` );
    if( array.length < 40 ) {
        return string;
    }
    else {
        array.length = 40;
        return array.join( `` );
    }
};

console.log( formatString( 'Curabitur ligula sapien, tincidunt non.' ) );

console.log( formatString( 'Vestibulum facilisis, purus nec pulvinar iaculis.' ) );

console.log( formatString( 'Curabitur ligula sapien.' ) );

console.log( formatString( 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.' ) );