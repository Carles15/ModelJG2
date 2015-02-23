$(document).ready(function(){
    $('div#insertar').dialog({
        modal:true,
        autoOpen:false,
        buttons:{
            "Insertar": function(){
                var datosInsertar = $('form#InsertForm').serialize();
                $.ajax({
                   type:'POST',
                   url:'php/insert.php',
                   data: datosInsertar,
                   success: function () {
                        alert("Datos insertados con éxito");
                        $('#list2').trigger("reloadGrid");
                        $('div#insertar').dialog("close");
                    },
                    error: function () {
                        alert("Hubo un error inesperado al insertar el dato");
                    }
                });
            },
            "Cancelar": function(){
                $(this).dialog("close");
            }
        }
    });
    
    $('input#InsertButton').click(function(){
        $('div#insertar').dialog("open");
        $('div#insertar form#InsertForm input').val("");
    });
});


