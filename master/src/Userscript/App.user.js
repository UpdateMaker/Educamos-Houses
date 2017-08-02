// ==UserScript==
// @name         Educamos Houses
// @version      1
// @description  Permite poner la house en datos usuarios.
// @author       Juan Ignacio Veron Desimoni
// @include     *-ar.educamos.com/DatosCentro/Alumnos/EditarAlumno*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==




EsperaID("#AlumnoDatosPersonales_NumeroCodigoBarras",function(){
    $('label[for=AlumnoDatosPersonales_NumeroCodigoBarras]').html('House');
    var sel = $("#AlumnoDatosPersonales_NumeroCodigoBarras").val();
    var txt;
    if (sel == 'Cavell'){txt ='<option  value="Fry">Fry</option>'+
               '<option selected="selected" value="Cavell">Cavell</option>'+
               '<option value="Keller">Keller</option>'+
               '<option value="Nightingale">Nightingale</option>';}
    else{    if (sel == "Keller"){txt ='<option  value="Fry">Fry</option>'+
               '<option value="Cavell">Cavell</option>'+
               '<option selected="selected" value="Keller">Keller</option>'+
               '<option value="Nightingale">Nightingale</option>';}
          else{  if (sel == "Nightingale"){txt ='<option  value="Fry">Fry</option>'+
               '<option value="Cavell">Cavell</option>'+
               '<option value="Keller">Keller</option>'+
               '<option selected="selected" value="Nightingale">Nightingale</option>';}
              else {if (sel == "Fry"){
               txt ='<option selected="selected" value="Fry">Fry</option>'+
               '<option value="Cavell">Cavell</option>'+
               '<option value="Keller">Keller</option>'+
               '<option value="Nightingale">Nightingale</option>';}
               else {txt ='<option selected="selected" value=""></option>'+
               '<option value="Fry">Fry</option>'+
               '<option value="Cavell">Cavell</option>'+
               '<option value="Keller">Keller</option>'+
               '<option value="Nightingale">Nightingale</option>';}     
              }
        }
    }
    $('input[id=AlumnoDatosPersonales_NumeroCodigoBarras]')
  .replaceWith('<select data-val="true" data-val-length="El campo Número código barras no puede superar los 20 caracteres." data-val-length-max="20" id="AlumnoDatosPersonales_NumeroCodigoBarras" name="AlumnoDatosPersonales.NumeroCodigoBarras" type="text" data-eduinitvalue="8" maxlength="20" class="valid">'+
 txt +'</select>'); 
});
function EsperaID(elementPath, callBack){
  window.setTimeout(function(){
    if($(elementPath).length){
      callBack(elementPath, $(elementPath));
    }else{
      EsperaID(elementPath, callBack);
    }
  },500);
}
