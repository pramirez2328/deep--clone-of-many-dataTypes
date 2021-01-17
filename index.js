// Clonator (30 mins)

// Write a function that can create a deep copy of anything
// it gets passed. The generated copy should have the same own
// enumerable properties as the source, but modifying
// the copy should not affect the source in any way.

function clonator( source ) {

  let deepClone;

  if ( source == null || source == undefined ) {

    console.log( 'this is null and undefined', source );
    console.log( 'reult', source );
    return source;

  } else if ( typeof source == 'function' ) {

    console.log( 'this is function', source );

    deepClone = source;

    console.log( 'funciton result', deepClone );

    return deepClone;

  } else if ( Array.isArray( source ) ) {

    console.log( 'this is array', source );

    deepClone = Array.from( source );

    console.log( 'this is array result', deepClone );
    return deepClone;

  } else if ( typeof source == 'object' ) {

    let deepClone2 = {};
    for ( let pro in source ) {
      if ( source.hasOwnProperty( pro ) ) {
        deepClone2[ pro ] = source[ pro ];
      }
    }
    console.log( 'object result', deepClone2 );
    return deepClone2;

  } else if ( typeof source !== 'object' ) {

    console.log( 'no object', source );

    deepClone = source;

    console.log( 'no object result', deepClone );

    return deepClone;
  }

}






module.exports = clonator;