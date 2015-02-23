$(document).ready(function (){
    $('#actualizar').dialog({
        modal:true,
        autoOpen:false,
        buttons:{
            "Actualizar": function(){
                var datosActualizacion = $('div#actualizar form#UpdateForm input').serialize();
                $.ajax({
                    type:'POST',
                    url:'php/update.php',
                    data:datosActualizacion,
                    success: function () {
                        alert("Los datos fueron actualizados correctamente");
                        $('#list2').trigger("reloadGrid");
                        $('#actualizar').dialog("close");
                    },
                    error: function () {
                        alert("Parece que hubo un error al actualizar los datos");
                    }
                });
            },
            "Cancelar": function(){
                $('#actualizar').dialog("close");
            }
        }
    });
    
    $('#UpdateButton').click(function(){
        var id = $('#list2').jqGrid('getGridParam','selrow');
        if(id){
            var datos = $('#list2').jqGrid('getRowData',id);
            $('div#actualizar form#UpdateForm input#updateId').val(datos.id);
            $('div#actualizar form#UpdateForm input#updateUsuario').val(datos.usuario);
            $('div#actualizar form#UpdateForm input#updatePassword').val(datos.password);
            $('#actualizar').dialog("open");
        }else{
            alert("Parece que no has seleccionado el dato que quieres actualizar");
        }
    });
});


