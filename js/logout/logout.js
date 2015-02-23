$(document).ready(function(){
    $('#logOutButton').click(function(){
        $.ajax({
           url:'php/logout/logout.php',
           success: function(){
               alert("Sesion destruida con éxito");
           }
        });
    });
});


