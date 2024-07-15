
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-FHF3Q92KHJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FHF3Q92KHJ');
</script>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Servicio de Informaci&oacute;n de Tiempo de Paso</title>
		<link href="vectalia2.css" rel="stylesheet" type="text/css" />
		<link href="https://fonts.cdnfonts.com/css/dot-matrix" rel="stylesheet">
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="loader.js"></script>		
	</head>
	<body>
		<div id="wrapper">
			<div id="header-intrinsic-ratio">
				<div id="header" class="headerAlicante">
				</div>
				<!--header-->
			</div>
			<div id="main-intrinsic-ratio"> 
				<div id="main">
					<div id="np-intrinsic-ratio">					
						<div id="np">
							<div class="container">
								<div class="helper">
									<p><span id="parada_cod"> 6122</span>
										<span 
											id="parada_desc">PUERTA DE ALICANTE</span>
									</p>
								</div>
								<!--np-->
							</div>
							<!--np intrinsic-->
						</div>
					</div>
				</div>
				<!--main-->
			</div>
			<!--main intrinsic-->
      <div id="footer-intrinsic-ratio">
        <div id="footer" class="footerAlicante">
          <a href="http://www.alicante.es/" target="_blank"><div id="loiz" class="loiz2"></div></a>
          <a href="http://www.alicante.vectalia.es/" target="_blank"><div id="lode" class="lode2"></div></a>
        </div><!--footer-->
		<div class="last_link">
		
			<br/>
			<a href="http://www.alicante.es" target="_blank">www.alicante.es</a><br/>
			<a href="http://www.alicante.vectalia.es" target="_blank">www.alicante.vectalia.es</a>
		
		</div>
      </div><!--footer intrinsic ratio-->
			<!--footer intrinsic ratio-->
		</div>
		<!--wrapper-->
		<div id="tablon" class="noise">
			<script>
			var text = "NOTHING\n" +
"Linea 004 TÓMBOLA: 5 min.: 1: 38.353416000049634, -0.5296460118526056: \n" +
"Linea 004 TÓMBOLA: 36 min.: 1: 38.34326266672155, -0.4957484638751737: \n" +
"";
			var textavisos = "";
			
			var hayloc = 0;

			var textaviso = textavisos.split(";");
			navisos = textaviso.length-1;

			for (i = 0; i < textaviso.length; i++) 
			{
				tt = textaviso[i].split("<br>")
				tt[0] = "<span class='cabecera'>"+tt[0]+"</span><br>";
				textaviso[i]=tt;
			}
			
			const tiempo_recarga = 15500;
			
			var lector;
			var tope;
			var offset;	
			
			var azul = new Array("21","21N","23","23N","24","24N","26","30","35", "38","39","51","52","53","C-6","C-51","C-52","C-53", "M-1", "M-2");
			var isWeekend = ([0,6].indexOf(new Date().getDay()) != -1);
			
				
			$( document ).ready( function(){
				lector = new Loader( text );
				var offset;
				var tablon = $( "#main" );
				var lineas = lector.getLineas();
				var s="";
				
				compare_dates = function(date1,date2){
				let d1 = Number(date1[1].split(" ")[0].trim()); 
				let d2 = Number(date2[1].split(" ")[0].trim()); 
				if ((d1>d2)) return 1;
					else if ((d1<d2))  return -1;
						else return 0;
				}
				
				lineas.sort(compare_dates);	 			
				
				if( lineas.length == 0 ){
					s = '<div class="lhb-intrinsic-ratio"><div class="lhb">';
					
					if(navisos>0)
					{
					s = '<div class="lhb-intrinsic-ratio-aviso"><div class="lhb">';
					s+= '<div id="avisos">';
					s+= '<div id="aviso_cabecera"><img src="i_alerta.png">  Alertas</div>';
					s+= '<div id="avisotablon">'+textaviso[0].join(" ")+'</div>';
					if(navisos>1)
						s+= '<div id="p_aviso">1/'+(textaviso.length - 1)+'</div>';
					s+= '</div>';
					s+= '</div></div>';
					s+= '<div class="nohay"><p>No hay estimaciones</p><br><p>Por favor, revisa la informaci&oacute;n en la parada<br> o visita <a href="http://alicante.vectalia.es">www.alicante.vectalia.es</a><br>para horarios y alertas</p><br><div>';	
					}
					else
						if ("PUERTA DE ALICANTE" == "Sin nombre")
							s+= '<div class="nohay"><br><br><img style="width:50%;"src="img_sin_nombre.png">';				
						else
							s+= '<div class="nohay"><p>No hay estimaciones</p><br><p>Por favor, revisa la informaci&oacute;n en la parada<br> o visita <a href="http://alicante.vectalia.es">www.alicante.vectalia.es</a><br>para horarios y alertas</p><br>';	
									
					s += '</div>';
					tablon.append( s ); 
				}
				else
				{
				if(navisos>0)
					{
					s = '<div class="lhb-intrinsic-ratio-aviso"><div class="lhb">';
					s+= '<div id="avisos">';
					s+= '<div id="aviso_cabecera"><img src="i_alerta.png">  Alertas</div>';
					s+= '<div id="avisotablon">'+textaviso[0].join(" ")+'</div>';
					if(navisos>1) s+= '<div id="p_aviso">1/'+(textaviso.length - 1)+'</div>';
					s+= '</div>';
					s+= '</div></div>';
					}
				for( var i = 0; i< lineas.length; ++i ){
					var linea = lineas[ i ][ 0 ].split(' ')[1].trim();	
					
					if ((linea =="011") && !isWeekend) linea = "11H";
					
					offset = lineas[ i ][ 0 ].indexOf("Linea ");
					try	{
						var tope = ( (lineas[ i ][ 0 ]).split(' ')[1]).length + 6; }
					catch( e ){}
					
					s += '<div class="lhb-intrinsic-ratio"><div id="v_line"></div><div class="lhb';
					if( azul.includes(linea)) s += " lha"; 
					s += '">';
					
					var dest = lineas[ i ][ 0 ].substr(offset + tope);
					var l_ico = lineas[ i ][ 0 ].slice(6,tope);
					
					
					s += '<a title="Ver term&oacute;metro de la l&iacute;nea"  href="data/termometros/'+linea+'_'+lineas[ i ][ 2 ]+'.pdf"><div style="opacity:0; animation-delay:'+i/10+'s"  class="ico_linea"><img class="ico_linea" src="http://qr.vectalia.es/alicante/img/ico_lineas/ico_l_'+&#32;linea&#32;+'.png" ></div>';
					
					s += '<div class="lin" style="opacity:0;animation-delay:'+i/10+'s;"><p>';
					
					if((linea=="027")||(linea=="028"))
						s+="<span class='dest_spacing'>";
					else
						s+="<span>";
					
					s += dest + ' </span></p></div></a>';
					
					if((lineas[ i ][ 1 ])==="0 min.")
						s += '<div class="tim" style="opacity:0; animation-delay:'+i/5+'s" ><p>pr&oacute;ximo</p></div>';
					
					else s += '<div class="tim" style="opacity:0; animation-delay:'+i/10+'s" ><p>'+lineas[ i ][ 1 ].trim()+'</p></div>';	
					
					s+= '<div class="separador" style="opacity:0; animation-delay:'+i/10+'s" ></div>';
					
					if ((parseInt((lineas[ i ][ 1 ]).split(" ")[0]) <= 150 ) && (lineas[ i ][ 2 ].trim() != 0))
					{
						//s += '<div title="Localiza tu Bus" class="loc"><a onclick="document.getElementById("id01").style.display="block" href="http://qr.vectalia.es/alicante/mapa.aspx?l='+&#32;lineas[&#32;i&#32;][&#32;0&#32;].split('&#32;')[1].trim()&#32;+'&amp;loc='&#32;+lineas[&#32;i&#32;][&#32;3&#32;].trim()&#32;+&#32;'&amp;pl=38.342898985,&#32;-0.516863229'&#32;+&#32;'&amp;est='&#32;+&#32;lineas[&#32;i&#32;][&#32;1&#32;].trim()&#32;+&#32;'&amp;np=6122'&#32;+&#32;'&amp;p=1" target="_blank"><img style="opacity:0; animation-delay:'+i/5+'s" class="ico_loc" src="ico_loc.png"></a></div>';
						s += '<div title="Localiza tu Bus" class="loc"><a onclick="document.getElementById("id01").style.display="block" href="http://qr.vectalia.es/alicante/mapa.aspx?l='+&#32;lineas[&#32;i&#32;][&#32;0&#32;].split('&#32;')[1].trim()&#32;+&#32;'&amp;pl=38.342898985,&#32;-0.516863229'&#32;+&#32;'&amp;np=6122'&#32;+&#32;'&amp;p=1&amp;pr=1" target="_blank"><img style="opacity:0; animation-delay:'+i/5+'s" class="ico_loc" src="ico_loc.png"></a></div>';
						var hay_loc = 1
					}
					s +='</div></div>';
					tablon.append( s );
					s = "";
				}
				if(hay_loc == 1)
					//s +='<div class="lhb-intrinsic-ratio"><div class="lhb"><p id="localiza_leyenda"><i>Localiza tu Bus</i><img  src="ico_loc.png"><p></div></div>';
					s +='<div id="leyenda"><p id="localiza_leyenda"><i>Localiza tu Bus</i><img  src="ico_loc.png"><p></div>';
				tablon.append( s );s = "";
				}
			});
			</script>

		</div>
		<script>

			setTimeout(function(){ window.location.reload(1); }, tiempo_recarga);

			var t=(tiempo_recarga-500)/(textaviso.length-1);
			
			var i = 0;
			setInterval(function() {
				i++;
				if(i == textaviso.length - 1) i = 0;
					$("#avisotablon").html(textaviso[i]);
					$("#p_aviso").html(1+i+"/"+(textaviso.length - 1));
			},t);
		</script>
	</body>
</html>
