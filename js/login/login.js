$(document).ready(function () {
    $('#loginButton').click(function () {
        var datosRegistro = $('#logForm').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/login/login.php',
            data: datosRegistro,
            success: function (data) {
                if(data==200)
                window.location= "index2.html";
                if(data!=200)
                alert("El usuario no existe");
            },
            error: function (data) {
                alert("Error al intentar registrarte");
            }
        });
    });
});


