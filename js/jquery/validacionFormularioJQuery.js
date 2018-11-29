function validar(){
	
	var expEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var DNI = /^[0-9]{8}$/;

	
	
	if($("#nombre").val().length<10 || $("#nombre").val().length>20){
		$("#menError1").css("display", "block");		
		return false;
	}
	
	else{
				$("#menError1").css("display", "none");

		if($("#documento").val()==""|| !$("#documento").val().match(DNI)){
			$("#menError2").css("display", "block");				
			return false;
		}
		else{
					$("#menError2").css("display", "none");
		
			if($("#nacimiento").val()=="" ){
			$("#menError3").css("display", "block");				

				return false;
			}
			else{
						$("#menError3").css("display", "none");

				if($("#email").val()==""|| !$("#email").val().match(expEmail)){
				$("#menError4").css("display", "block");				

					return false;				
				}
				else{
								$("#menError4").val().css("display", "none");

					if($("#mensaje").val()==""){
					$("#menError5").css("display", "block");				

						return false;
					}
				}
				
			}
			
			
		}
	}
	
	
	return true;			
}