


                    
function validar(){
	
	var expEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var DNI = /^[0-9]{8}$/;

	var nombreYApellido=document.getElementById("nombre").value;
	var documento=document.getElementById("documento").value;
	var naciemiento=document.getElementById("nacimiento").value;
	var email=document.getElementById("email").value;
	var mensaje=document.getElementById("mensaje").value;
	

	
	
	if(nombreYApellido.length<10 || nombreYApellido.length>20){
		document.getElementById("menError1").style.display = "inherit";
		return false;
	}
	
	else{
				document.getElementById("menError1").style.display = "none";

		if(documento==""|| !DNI.test(documento)){
			document.getElementById("menError2").style.display = "inherit";				
			return false;
		}
		else{
					document.getElementById("menError2").style.display = "none";
		
			if(naciemiento=="" ){
			document.getElementById("menError3").style.display = "inherit";				

				return false;
			}
			else{
						document.getElementById("menError3").style.display = "none";

				if(email==""|| !expEmail.test(email)){
				document.getElementById("menError4").style.display = "inherit";				

					return false;				
				}
				else{
								document.getElementById("menError4").style.display = "none";

					if(mensaje==""){
					document.getElementById("menError5").style.display = "inherit";				

						return false;
					}else{
					
					document.getElementById("menError5").style.display = "none";
					}
				}
				
			}
			
			
		}
	}
	
	
	return true;			
}