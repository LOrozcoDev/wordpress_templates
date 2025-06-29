function valogin(){
if($('#usuario').val() == ""){
		alert("El campo Usuario: no puede estar vacío.");
		$('#usuario').focus();
		return false;
		}
		
    if($('#contra').val() == ""){
        alert("Ingrese su contraseña.");
        $('#contra').focus();
        return false;
    }

	
	return true;
	
	}
	
	function redireccionar(){
  location.href="admin/index.php";
} 
	
	$(document).ready( function() {
		
		$('#login').click( function() {
			if(valogin()){
				
				$.post("admin/assets/checkuser.php",$('#ingreso').serialize(),function(login){
			
                $('#ingreso').fadeOut('slow');
				
				if(login == 1){
		
		
                   $('#exito').delay(500).fadeIn('slow');      // Si hemos tenido éxito, hacemos aparecer el div 'exito'
				   $('#exito').delay(800).fadeOut('slow');
				   setTimeout ("redireccionar()", 3000);
	}// fin del if login
	
	else{
		$('#fracaso').delay(500).fadeIn('slow');
		 $('#fracaso').delay(800).fadeOut('slow');
		 $('#ingreso').delay(2000).fadeIn('slow');
		}
				
				})//fin del envio del formulario
				
				
				}// fin del if
			
			
			});/* fin funsion click */ 
		
		
		});