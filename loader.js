// Escrito por Juan Carlos Carrillo (carrialpine@gmail.com) para Nabelia
// Requiere jQuery

function Loader( texto ){
  var lineas = texto.trim().split( "\n" );
  
  // [["D","9 min."],["A","14 min."],["B","19 min."]]
  this.getLineas = function(){ return lineas; }
  
  lineas = lineas.slice(1);
  for( var i = 0; i < lineas.length; ++i ){
    if( lineas[ i ].indexOf( "Sin Estimaciones" ) > -1 ){
      lineas = [];
      return;
    }
    
    if( lineas[ i ].indexOf( "no se encuentra" ) > -1 ){
      lineas = [];
      return;
    }
    
    if( lineas[ i ].indexOf( "en entorno de parada" ) > -1 ){
      lineas.splice( i, 1 );
      --i;
      continue;
    }
    
    if( lineas[ i ].indexOf( ":" ) > -1 )
      lineas[ i ] = lineas[ i ].split( ":" );
    else {
      // Primer Bus, Segundo bus...
	  if( lineas[ i ].indexOf("Bus")>=-1)
		lineas[ i ] = lineas[ i ].split( "Bus" );
    }
	
	// Caso: LÃ­nea 21 ALICANTE (O.ESPLA): Horas de salida estimada:  8 min. [13:08] y 29 min. [13:29]
	if( lineas[ i ].length > 2 && lineas[ i ][ 1 ] == " Horas de salida estimada" ){
		if( lineas[ i ][ 2 ].indexOf("[")>=-1)
			lineas[ i ][ 1 ] = lineas[ i ][ 2 ].split( "[" )[0];
		else
			lineas[ i ][ 1 ] = lineas[ i ][ 2 ];
		
		for( var z = 3; z < lineas[ i ].length; ++z ){
			var conY = lineas[ i ][ z ].indexOf( "] y " );
			var more = "";
			if( conY == -1 )
				more = lineas[ i ][ z ].substr( 3 );
			else
				more = lineas[ i ][ z ].substr( conY + 4 );
			
			conY = more.indexOf( "[" );
			if( conY >= -1 )
				more = more.substr(0,conY);
			
			if( more.length > 0 ){
				more = "Siguiente : " + more;
				lineas.splice( i+1, 0, more );
			}
		}
	}
    
    for( var j = 0; j < lineas[ i ].length; ++j ){
      lineas[ i ][ j ] = lineas[ i ][ j ].trim();
      //if( j == 0 )lineas[ i ][ j ] = lineas[ i ][ j ].split( " " )[ 1 ];
    }
  }
  
  //alert(lineas.length + lineas[0][0].trim() + lineas[1][0].trim());

//if (lineas.length > 1)  
if(lineas.length != 2)
  // Buscamos repetidos y omitimos
  for( var i = 0; i < lineas.length; ++i ){
    if( lineas[ i ][ 0 ] != "Siguiente" )
		for( var j = i + 1; j < lineas.length; ++j ){
		  if( lineas[ i ][ 0 ] == lineas[ j ][ 0 ] ){
			lineas.splice( j, 1 );
			--j;
			continue;
		  }
		}
  }
	
	
}

function alertArray( arr ){
	var t = "";
	for( var i = 0; i < arr.length; ++i )
		t += "\r\n[" + i + "]: " + arr[ i ];
	alert( t );
}