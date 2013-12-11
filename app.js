//inyectamos el modulo udpCaptcha a nuestro modulo
var app = angular.module("app", ["udpCaptcha"]);

//inyectamos la factoria captcha a nuestro controlador
app.controller("homeController", function($scope, $captcha)
{	
	//creamos una función, por ejemplo para hacer login con un formulario
	//y comprobamos si el captcha pasa la validación
	$scope.login = function(user)
	{
		//si pasa la validacion correctamente
		if($captcha.checkResult($scope.resultado) == true)
		{
		 	alert("El captcha ha pasado la validación");
		}
		//si falla la validacion
		else
		{
		 	alert("Error, captcha incorrecto");
		}
	}
});

